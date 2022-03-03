export function muxURLReplace(url: string) {
  return url.replace("https://stream.mux.com/", "").replace(".m3u8", "");
}
