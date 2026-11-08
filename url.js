import url from 'url';

//const {URL} = Require('url');
const u = new URL(
    'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'
);
console.log(u.protocol);
console.log(u.host);
console.log(u.pathname);
console.log(u.search);
console.log(u.hash);
u.searchParams.forEach((v,k)=>{
    console.log(k,"=",v);
});