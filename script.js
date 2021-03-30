$(function () {
    const overlay = $('.overlay');

    const clothesButtonWrapper = $('.clothes-button-wrapper').find('button');
    clothesButtonWrapper.click(function () {
        clothesButtonWrapper.removeClass('selected');
        $(this).addClass('selected');

        const boxWrapper = $('.box-wrapper');
        boxWrapper.addClass('hidden');
        const productName = $(this).data('content');
        $(`.${productName}`).remove();
        console.log(productName);

        for (let i = 0; i < products[productName].length; i++) {
            let productObj = products[productName][i],
                productHTML = getproductHTML(productObj, productName);
            mainContentWrapper.append(productHTML);
        }
    });

    const mainContentWrapper = $('.main-content-wrapper'),
        getproductHTML = function (productObj, productName) {
            return `<div class="box-wrapper ${productName}" data-id=${productObj.id}>
                        <div class="coat-img-wrapper" style="background-image: url(assets/${productName}/${productObj.imgUrl})"></div>
                        <div class="coat-info-wrapper">
                            <div class="name-wrapper">${productObj.name}</div>
                            <div class="price-wrapper same-color">${productObj.currency}${productObj.price}</div>
                        </div>
                    </div>
                `;
        };

    for (let i = 0; i < products.coats.length; i++) {
        let productObj = products.coats[i],
            productHTML = getproductHTML(productObj, 'coats');
        mainContentWrapper.append(productHTML);
    }

    mainContentWrapper.delegate('.coat-img-wrapper', "click", function () {
        const id = $(this).parents('.box-wrapper').data('id');
        overlay.removeClass('hidden');
        const classes = $(this).parents('.box-wrapper').attr("class").split(' ');
        console.log('classes : ', classes[1]);
        for (let i = 0; i < products[classes[1]].length; i++) {
            let productObj = products[classes[1]][i];
            if (id === productObj.id) {
                $('.coat-img-double-wrapper').css({ backgroundImage: `url(assets/${classes[1]}/${productObj.imgUrl})` });
                $('.name-of-coat-wrapper').text(`${productObj.name}`);
                $('.price-wrapper').text(`${productObj.currency}${productObj.price}`);
                $('.info-composition-wrapper').text(`${productObj.composition}`);
                $('.info-country-wrapper').text(`${productObj.country}`);
                $('.info-care-wrapper').text(`${productObj.care}`);
            }
        }
    });

    const close = $('.close-wrapper');
    close.click(function () {
        overlay.addClass('hidden');
    });

    const sizeWrapper = $('.size-wrapper').find('button');
    sizeWrapper.click(function () {
        sizeWrapper.removeClass('selected');
        $(this).addClass('selected');
    });

    const overlayTopButtonsWrapper = $('.overlay-top-buttons-wrapper').find('button');
    overlayTopButtonsWrapper.click(function () {
        overlayTopButtonsWrapper.removeClass('selected');
        $(this).addClass('selected');
    });

    const categoriesButtonsWrapper = $('.categories-buttons-wrapper').find('button');
    categoriesButtonsWrapper.mouseover(function () {
        categoriesButtonsWrapper.removeClass('selected');
        $(this).addClass('selected');
    });
});