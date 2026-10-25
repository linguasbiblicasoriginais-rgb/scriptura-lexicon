/* Carregamento de capítulos por demanda; sem alterar os módulos das fontes. */
(function () {
  "use strict";
  const manifest = window.ScripturaChapterManifest || {};
  const pending = new Map();
  const recent = new Map();
  const LIMIT = 16;
  const metadata = ["ScripturaScriptureTexts", "ScripturaScriptureParagraphBreaks",
    "ScripturaScriptureParashahTypes", "ScripturaScriptureInlineParashahTypes",
    "ScripturaScriptureEditorialSeparators", "ScripturaScriptureHeadings"];
  function key(edition, bookId, chapter) { return edition+"/"+bookId+"/"+chapter; }
  function location(edition, bookId, chapter) {
    const record = Object.hasOwn(manifest,edition) && manifest[edition][bookId];
    if (!record || !Number.isSafeInteger(chapter) || chapter < 1 || chapter > record[1])
      return null;
    return "scriptures/texts/"+record[0]+"-"+chapter+".js";
  }
  function data(edition,bookId,chapter) {
    return window.ScripturaScriptureTexts?.[edition]?.[bookId]?.[chapter];
  }
  function evict(edition,bookId,chapter) {
    for (const name of metadata) {
      const bucket = window[name]?.[edition]?.[bookId];
      if (bucket && Object.hasOwn(bucket,chapter)) delete bucket[chapter];
    }
  }
  function touch(id,edition,bookId,chapter) {
    recent.delete(id);
    recent.set(id,[edition,bookId,chapter]);
    while(recent.size>LIMIT) {
      const [stale,reference] = recent.entries().next().value;
      recent.delete(stale);
      evict(...reference);
    }
  }
  function load(edition,bookId,chapter) {
    const src=location(edition,bookId,chapter);
    if (!src) {
      const error=new Error("O capítulo não existe no manifesto da edição.");
      error.code="NOT_FOUND";return Promise.reject(error);
    }
    const id=key(edition,bookId,chapter);
    const existing=data(edition,bookId,chapter);
    if (existing && typeof existing==="object" && Object.keys(existing).length) {
      touch(id,edition,bookId,chapter);
      return Promise.resolve(existing);
    }
    if (pending.has(id)) return pending.get(id);
    const operation = new Promise((resolve,reject)=>{
      const script=document.createElement("script");
      script.async=true;
      script.src=src;
      script.onload=()=>{
        script.remove();
        const value=data(edition,bookId,chapter);
        if (!value || typeof value!=="object" || !Object.keys(value).length) {
          const error=new Error("Módulo inválido ou sem versículos: "+src);
          error.code="INVALID_MODULE";reject(error);return;
        }
        touch(id,edition,bookId,chapter);
        resolve(value);
      };
      script.onerror=()=>{
        script.remove();
        const error=new Error("Não foi possível carregar "+src);
        error.code="NETWORK_ERROR";reject(error);
      };
      document.head.append(script);
    });
    pending.set(id,operation);
    // Uma falha não deve ficar presa no cache de promessas.
    operation.then(()=>pending.delete(id),()=>pending.delete(id));
    return operation;
  }
  function prefetch(edition,bookId,chapter,canContinue) {
    const connection=navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection?.saveData || /(?:^|-)2g$/.test(connection?.effectiveType || "") ||
        document.visibilityState==="hidden" || typeof requestIdleCallback!=="function")return;
    requestIdleCallback(()=>{
      if (typeof canContinue==="function" && !canContinue()) return;
      for(const adjacent of [chapter+1,chapter-1]) {
        if (location(edition,bookId,adjacent) && !data(edition,bookId,adjacent))
          load(edition,bookId,adjacent).catch(()=>{});
      }
    },{timeout:2000});
  }
  window.ScripturaChapterLoader=Object.freeze({load,location,prefetch});
})();
