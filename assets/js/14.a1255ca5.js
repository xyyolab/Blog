(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{362:function(e,t,n){"use strict";n.r(t);var r=new IntersectionObserver((function(e){e[0].intersectionRatio>=.25?(document.querySelector(".navbar").classList.add("is-floating"),document.querySelector(".navbar").classList.remove("not-floating")):(document.querySelector(".navbar").classList.remove("is-floating"),document.querySelector(".navbar").classList.add("not-floating"))}),{threshold:.25}),o={mounted:function(){r.observe(document.querySelector(".abstract-wrapper")),document.querySelector("div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(1) > h6").innerText="articals",document.querySelector("div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(2) > h6").innerText="tags",document.querySelector("h4:nth-child(2)").innerText="categories",document.querySelector("h4:nth-child(5)").innerText="tags"},updated:function(){document.querySelector(".navbar").classList.remove("not-floating"),document.querySelector(".navbar").classList.remove("is-floating")}},i=n(1),a=Object(i.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}})}),[],!1,null,null,null);t.default=a.exports}}]);