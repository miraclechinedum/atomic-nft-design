export default [
  { label: "EXPLORER", href: "/explorer" },
  { label: "MARKET", href: "/market" },
  { label: "TRADING", href: "/trading" },
  { label: "NFT CREATOR", href: "/creator" }
].map(link => {
  link.style = `nav-link`;
  return link;
});
