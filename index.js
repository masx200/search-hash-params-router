function gethashparams() {
  return location.hash&& Object.fromEntries(new URLSearchParams(location.hash.slice(1)));
}
function getsearchparams() {
  return location.search&& Object.fromEntries(new URL(location.href).searchParams);
}
function setsearchparams(opt) {
  let url = new URL(location.href);

  url.search = String(new URLSearchParams({ ...opt }));
  history.pushState(null, null, url.href);

  window.dispatchEvent(new Event("popstate"));
}

function sethashparams(opt) {
  let url = new URL(location.href);

  url.hash = String(new URLSearchParams({ ...opt }));
  history.pushState(null, null, url.href);

  window.dispatchEvent(new Event("hashchange"));
}
export{sethashparams,setsearchparams,getsearchparams,gethashparams}
