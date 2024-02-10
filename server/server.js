const express = require('express')
const xmlbuilder = require('xmlbuilder');
const app = express();
const PORT = process.env.PORT || 3000;

const routes = [
    '/',
    '/home',
    '/Home',
    '/About',
    '/Contact',
    '/Privacy-Policy',
    '/Terms-Conditions',

    '/Post/293',
    '/Post/294',

    '/CategoryList',

    // '/CategoryList/:categoryListItem',
    '/CategoryList/Stuties',
    '/CategoryList/Ashtaks',
    '/CategoryList/ShivPooja',

    // '/CategoryList/:categoryListItem/:itemKey/:language',
    '/CategoryList/ShivChalisa/ShivChalisa/Sanskrit',
    '/CategoryList/Stuties/ShivMahimnaStotam/Sanskrit',
    '/CategoryList/Ashtaks/Bilvashtakam/Sanskrit',
    '/CategoryList/Ashtaks/Lingashtakam/Sanskrit',
    '/CategoryList/ShivPooja/ShivManasPooja/Sanskrit',

    // 'CategoryList/:itemKey/:language',

    '/**'

    // Add more routes as needed
];

app.get('/sitemap.xml', (req, res) => {
    const root = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
    root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

    routes.forEach(route => {
        const url = root.ele('url');
        url.ele('loc', `https://omnamahshivay.in/#${route}`);
        // You can add more elements like <changefreq> and <priority> here if needed
    });

    res.header('Content-Type', 'application/xml');
    res.send(root.end({ pretty: true }));
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});



