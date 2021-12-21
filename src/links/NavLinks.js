export default [
  { label: "EXPLORER", href: "/" },
  { label: "MARKET", href: "/about" },
  { label: "TRADING", href: "/blog" },
  { label: "NFT CREATOR", href: "/contact" }
].map(link => {
  link.style = `nav-link`;
  return link;
});
