(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function c(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=c(n);fetch(n.href,o)}})();const u=[{id:1,name:"Wireless Headphones",price:99.99,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"},{id:2,name:"Smart Watch",price:199.99,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"},{id:3,name:"Laptop Bag",price:49.99,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"},{id:4,name:"Wireless Mouse",price:29.99,image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"}];let s=[];const m=document.getElementById("productList"),i=document.getElementById("cartModal"),a=document.getElementById("checkoutModal"),p=document.getElementById("cartItems"),y=document.getElementById("cartTotal"),f=document.getElementById("cartCount"),h=document.getElementById("cartIcon"),g=document.getElementById("closeCart"),v=document.getElementById("checkoutBtn"),E=document.getElementById("closeCheckout"),I=document.getElementById("checkoutForm");function L(){m.innerHTML=u.map(e=>`
    <div class="product-card">
      <img src="${e.image}" alt="${e.name}">
      <h3>${e.name}</h3>
      <p>$${e.price.toFixed(2)}</p>
      <button class="btn" onclick="addToCart(${e.id})">Add to Cart</button>
    </div>
  `).join("")}window.addToCart=e=>{const t=u.find(r=>r.id===e),c=s.find(r=>r.id===e);c?c.quantity+=1:s.push({...t,quantity:1}),l()};function l(){f.textContent=s.reduce((t,c)=>t+c.quantity,0),p.innerHTML=s.map(t=>`
    <div class="cart-item">
      <div>
        <h4>${t.name}</h4>
        <p>$${t.price.toFixed(2)} x ${t.quantity}</p>
      </div>
      <button class="btn secondary" onclick="removeFromCart(${t.id})">Remove</button>
    </div>
  `).join("");const e=s.reduce((t,c)=>t+c.price*c.quantity,0);y.textContent=e.toFixed(2)}window.removeFromCart=e=>{s=s.filter(t=>t.id!==e),l()};h.addEventListener("click",()=>{i.style.display="block"});g.addEventListener("click",()=>{i.style.display="none"});v.addEventListener("click",()=>{i.style.display="none",a.style.display="block"});E.addEventListener("click",()=>{a.style.display="none"});I.addEventListener("submit",e=>{e.preventDefault(),alert("Order placed successfully!"),s=[],l(),a.style.display="none"});window.addEventListener("click",e=>{e.target===i&&(i.style.display="none"),e.target===a&&(a.style.display="none")});L();
