
async function getProducts() {
        try {
            const data = await fetch(
            "https://ecommercebackend.fundamentos-29.repl.co/"
            );

            const res = await data.json();
    
            window.localStorage.setItem("products", JSON.stringify(res));
        
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    
    async function main() {
        const db = {
            products:
        JSON.parse(window.localStorage.getItem("products")) ||
        /* "Esto viene del loca storage". No aparece en consola con los elementos*/
        (await getProducts()),
        cart: {},
        };

    const productsHTML = document.querySelector(".products");

    let html = "";
    
        for (const product of db.products) {

            html += `
        
            <div class="product">
            <div class="product_img">
                <img src="${product.image}" alt="imagen"/>
                </div>
                
                <div class="product_info">
                <h4>${product.name} | <span>a</span>b: ${product.quantity}</h4>
                <h5>
                    $${product.price}
                    ${buttonAdd}     
                    
                </h5>
            </div>
        </div>
            `;
        }
    
        console.log(html);
        productsHTML.innerHTML = html;
        }
    main();
    

    