document.addEventListener("DOMContentLoaded", function () {
    const productsSection = document.getElementById('products');

    // Sample product data (replace with actual data)
    const products = [
        {
            name: 'Yamaha Electric Guitar',
            image: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/r/s/rse20_swift_blue_copy_1.jpg',
            description: 'High-quality electric guitar with amazing sound.'
        },
        {
            name: 'Yamaha C1G1',
            image: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9dc1522ad3a7607391f539810e42a604/f/x/fx280-2-9may.jpg',
            description: 'State-of-the-art digital piano with realistic key action.'
        },
        {
            name: 'Yamaha CORNICA',
            image: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/p/o/post-1_3_.png',
            description: 'State-of-the-art digital piano with realistic key action.'
        },
        {
            name: 'Yamaha Metalica',
            image: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/r/s/rss02t_sunset_burst_copy_1.jpg',
            description: 'State-of-the-art digital piano with realistic key action.'
        },
        {
            name: 'Yamaha Gimmy',
            image: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9dc1522ad3a7607391f539810e42a604/f/x/fx280-2-9may.jpg',
            description: 'State-of-the-art digital piano with realistic key action.'
        },
        {
            name: 'Yamaha pluto',
            image: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/p/o/post-1_3_.png',
            description: 'State-of-the-art digital piano with realistic key action.'
        },
        // Add more products as needed
    ];

    // Populate product cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productDesc = document.createElement('p');
        productDesc.textContent = product.description;

        card.appendChild(image);
        card.appendChild(productName);
        card.appendChild(productDesc);

        productsSection.appendChild(card);
    });
});
