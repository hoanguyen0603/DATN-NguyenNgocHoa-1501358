!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}({2:function(e,n,t){e.exports=t("AvXi")},AvXi:function(e,n){$(document).keypress(function(e){13==e.which&&$("#sell-coupon").trigger("click")}),$(".card").click(function(e){$("#coupon_value").val($(this).find(".card-value").text()),$("#coupon_id").val($(this).data("coupon-id")),$(".card").not($(this)).removeClass("card-active").css("opacity","0.4"),$(this).toggleClass("card-active").css("opacity","1"),$(this).hasClass("card-active")||($("#coupon_id").val(null),$("#coupon_value").val(null))}),window.Parsley.addValidator("validCustomerPhone",{validateString:function(e){$("#phone_number").val();return $.ajax({url:"/phieu-mua-hang/valid-buy-coupon",type:"GET",data:{phone_number:e}}).then(function(e){return!0===e.valid?($("#full_name").val(e.data).attr("readonly",!0),$("#ref_phone").val("").attr("readonly",!0),!0):$.Deferred().reject(e.error)},function(e){return $("#full_name").attr("readonly",!1),$("#ref_phone").attr("readonly",!1),422==e.status||$.Deferred().reject(e.responseText)})},messages:{en:"CÃ³ lá»—i xáº£y ra, vui lÃ²ng liÃªn há»‡ vá»›i OnOnPay Ä‘á»ƒ Ä‘Æ°á»£c há»— trá»£."}},32);var t=function(e){return 10===e.replace(" ","").length?"0000 000 000":"0000 000 0000"};$("#phone_number").mask(t),window.Parsley.addValidator("promotionValid",{validateString:function(e){var n=e,t=$("#phone_number").val(),r=$("#coupon_value").val();return $.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({url:"/ban-hang/validate-promotion",type:"POST",data:{phone_number:t,promotion:n,amount:r,transaction_type:2}}).then(function(e){return!0===e.valid||$.Deferred().reject(e.error)})},messages:{en:"CÃ³ lá»—i xáº£y ra, vui lÃ²ng liÃªn há»‡ vá»›i OnOnPay Ä‘á»ƒ Ä‘Æ°á»£c há»— trá»£."}},32);var r=function(e){return 10===e.replace(" ","").length?"0000 000 000":"0000 000 0000"};$("#ref_phone").mask(r),window.Parsley.addValidator("existsPhone",{validateString:function(e){$("#ref_phone").val();return $.ajax({url:"/phieu-mua-hang/valid-referral-phone",data:{phone_number:e}}).then(function(e){if(!1!==e)return!0},function(e){return $.Deferred().reject(e.responseText)})},messages:{en:"Sá»‘ Ä‘iá»‡n thoáº¡i giá»›i thiá»‡u khÃ´ng tá»“n táº¡i."}},32);var a=$("#buy-coupon-form").parsley({excluded:"input[type=button], input[type=submit], input[type=reset]",inputs:Parsley.options.inputs+"input, textarea, select, input[type=hidden], :hidden"});a.subscribe("parsley:form:success",function(e){$("#confirm-buy-coupon").modal()}),$("#sell-coupon").click(function(e){a.validate();e.preventDefault()})}});