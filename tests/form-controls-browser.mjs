import assert from "node:assert/strict";
import {chromium} from "playwright";

const browser = await chromium.launch({headless:true,args:["--no-sandbox"]});
const base = process.env.AUDIT_URL || "http://127.0.0.1:8765/";
const errors = [];

try {
    const page = await browser.newPage({viewport:{width:1280,height:800}});
    page.on("pageerror", err => errors.push(err.message));
    await page.goto(base+"#escrituras/UXLC/GEN.1.1",{waitUntil:"domcontentloaded"});
    await page.locator("#scripture-book option").first().waitFor();
    const bookButton = page.locator('.lx-select[data-for="scripture-book"] .lx-select-button');
    await bookButton.waitFor({state:"visible"});
    assert.equal(await page.locator("#scripture-book").getAttribute("aria-hidden"),"true");
    assert.equal(await page.locator("#source-filter").getAttribute("aria-hidden"),null,
        "Filtro de fontes existente deve manter a combobox própria");
    assert.ok(await page.locator(".lx-select").count() >= 5,
        "Listas dinâmicas dos leitores devem ser transformadas");

    for (const theme of ["dark","light"]) {
        await page.evaluate(value => document.documentElement.dataset.theme=value,theme);
        await bookButton.click();
        const dropdown = page.locator("#lx-global-options");
        await dropdown.waitFor({state:"visible"});
        assert.ok(await dropdown.getByRole("group").count()>2,
            "Grupos das Escrituras devem ser preservados");
        assert.ok(await dropdown.getByRole("option").count()>25);
        const style = await dropdown.evaluate(node => ({
            scroll: getComputedStyle(node).scrollbarColor,
            overflow: getComputedStyle(node).overflowY,
            height: node.clientHeight,
            scrollHeight: node.scrollHeight
        }));
        assert.ok(style.scroll.includes("rgb("),
            "Barra de rolagem deve usar cores definidas pelo tema");
        assert.equal(style.overflow,"auto");
        assert.ok(style.scrollHeight > style.height,"Lista longa deve ter rolagem");
        const hebrew = dropdown.locator(".lx-hebrew").first();
        assert.ok(await hebrew.count()>0,"UXLC deve ter palavras hebraicas na lista");
        const sizes = await hebrew.evaluate(node => ({
            hebrew: parseFloat(getComputedStyle(node).fontSize),
            regular: parseFloat(getComputedStyle(node.closest(".lx-option")).fontSize),
            language: node.lang,
            direction: node.dir
        }));
        assert.equal(sizes.language,"he");
        assert.equal(sizes.direction,"rtl");
        assert.ok(sizes.hebrew >= sizes.regular + 3,
            "Hebraico da lista deve ser significativamente maior");
        await dropdown.evaluate(node => node.scrollTop=250);
        assert.equal(await dropdown.isVisible(),true,
            "Rolagem da lista não deve fechar o menu");
        await page.keyboard.press("Escape");
        assert.equal(await dropdown.isVisible(),false);
    }
    await page.evaluate(()=>document.documentElement.dataset.theme="dark");

    // Valor e eventos do select original continuam sendo usados pelo leitor.
    await bookButton.click();
    await page.locator("#lx-global-options").getByRole("option",{name:/Êxodo/}).click();
    assert.equal(await page.locator("#scripture-book").inputValue(),"EXO");
    assert.match(page.url(),/#escrituras\/UXLC\/EXO\.1\.1$/);
    assert.ok((await bookButton.textContent()).includes("Êxodo"));

    const number = page.locator("#scripture-verse");
    const wrapper = page.locator("#scripture-verse").locator("xpath=..");
    assert.equal(await wrapper.getAttribute("class"),"lx-number");
    const up = wrapper.getByRole("button",{name:/Aumentar Versículo/i});
    const down = wrapper.getByRole("button",{name:/Diminuir Versículo/i});
    await up.click();
    assert.equal(await number.inputValue(),"2");
    assert.match(page.url(),/EXO\.1\.2$/);
    await down.click();
    assert.equal(await number.inputValue(),"1");
    assert.equal(await down.isDisabled(),true,"Limite mínimo deve desativar diminuição");
    const spinnerColor = await up.evaluate(node => getComputedStyle(node).color);
    assert.match(spinnerColor,/rgb\(/);
    assert.equal(await number.evaluate(node => getComputedStyle(node).appearance),"textfield");

    // O mesmo sistema alcança menus de edição, obras, capítulos e seções.
    for (const id of ["scripture-edition","scripture-chapter",
        "stromata-book","josefo-work","greek-author"]) {
        const select = page.locator("#"+id);
        if (await select.count()) {
            assert.equal(await select.locator("xpath=..").getAttribute("class"),"lx-select",
                id+" não foi aprimorado");
        }
    }
    await page.goto(base+"#escrituras/LXX/GEN.1.1",{waitUntil:"domcontentloaded"});
    await page.locator('.lx-select[data-for="scripture-book"] .lx-select-button').click();
    assert.equal(await page.locator("#lx-global-options .lx-hebrew").count(),0,
        "As opções gregas não devem herdar o aumento específico do UXLC");
    await page.keyboard.press("Escape");

    const mobile = await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
    mobile.on("pageerror", err => errors.push(err.message));
    await mobile.goto(base+"#escrituras/UXLC/GEN.1.1",{waitUntil:"domcontentloaded"});
    const mobileButton=mobile.locator('.lx-select[data-for="scripture-book"] .lx-select-button');
    await mobileButton.waitFor({state:"visible"});
    await mobileButton.click();
    const bounds=await mobile.locator("#lx-global-options").boundingBox();
    assert.ok(bounds && bounds.x>=0 && bounds.x+bounds.width<=390,
        "Lista móvel não deve sair da tela");
    assert.ok(await mobile.locator("#lx-global-options .lx-hebrew").count()>0);
    assert.ok(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),
        "Layout não deve criar overflow horizontal");

    assert.deepEqual(errors,[]);
    console.log("FORM_CONTROLS_PASS: themed list scroll, Hebrew UXLC, native values, number steps, 2 themes, mobile");
    await mobile.close();
} finally {
    await browser.close();
}
