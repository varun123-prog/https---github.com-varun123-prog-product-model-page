//variables for specification
const unitList = document.getElementById("unit");
const itemsList = document.getElementById("items-per-unit");
const lengthList = document.getElementById("length");
const depthList = document.getElementById("depth");
const widthList = document.getElementById("width");
const loadList = document.getElementById("load-tolerance");
const customList = document.getElementById("custom-printing-available");
const printList = document.getElementById("print-type");
const handlesList = document.getElementById("handles");
const materialList = document.getElementById("material");
const minimumList = document.getElementById("minimum-order-quantity");
const sustainList = document.getElementById("sustainability");

//variables for productInfo-availability
const leadItemsList = document.getElementById("leadItems");
const regionAvailableList = document.getElementById("regionAvailable");

//variables for productInfo-features
const ulfeatures = document.getElementById("availability-sustainability-ul");

//variables for productInfo-customisation
const ulCustomisation=document.getElementById("availability-customization-ul");

//variables for productInfo-product
const ulproductUsage=document.getElementById("availability-productusage-ul");

//variables for productInfo-benefits
const ulbenefits=document.getElementById("availability-benefits-ul");

//variables for productInfo-sustainability
const ulsustainability = document.getElementById("availability-sustainability");


//variables for product
const h1heading=document.getElementById("update-h1-heading");
const skuList=document.getElementById("sku-update");
const productPriceList=document.getElementById("product-price");
const productPriceList1=document.getElementById("product-price-state1");
const productPriceList2=document.getElementById("product-price-state2");
const productPriceList3=document.getElementById("product-price-state3");
const percentSaveList1=document.getElementById("save-percent1");
const percentSaveList2=document.getElementById("save-percent2");
const afterSaveList1=document.getElementById("after-save-percent-1");
const afterSaveList2=document.getElementById("after-save-percent-2");


//
fetch("http://localhost:3000/products").then((response) =>
  response.json().then((data) => {
    console.log("dsta:", data[0]);
    data.forEach((dt) => {
      updateProductList(dt.specification);
      productInformation(dt.productInfo);
      updateProduct(dt.product);
    });
  })
);

//updateProduct-function
const updateProduct = (data) => {
    const{
        name,
        sku,
        productPrice,
        qtyPrice1,
        qtyPrice2,
        qtyPrice3,
        percentSave1,
        afterSave1,
        percentSave2,
        afterSave2,
    } = data;
    h1heading.innerHTML=name;
    skuList.innerHTML=sku;
    productPriceList.innerHTML=productPrice;
    productPriceList1.innerHTML=qtyPrice1;
    productPriceList2.innerHTML=qtyPrice2;
    productPriceList3.innerHTML=qtyPrice3;
    percentSaveList1.innerHTML=percentSave1;
    percentSaveList2.innerHTML=percentSave2;
    afterSaveList1.innerHTML=afterSave1;
    afterSaveList2.innerHTML=afterSave2;
}


//updateProductList-function
const updateProductList = (data) => {
  const {
    unit,
    itemsperunit,
    length,
    depth,
    width,
    loadtolerance,
    customprintingavailable,
    printtype,
    handles,
    material,
    minimumorderquantity,
    sustainability,
  } = data;
  unitList.innerHTML = unit;
  itemsList.innerHTML = itemsperunit;
  lengthList.innerHTML = length;
  depthList.innerHTML = depth;
  widthList.innerHTML = width;
  loadList.innerHTML = loadtolerance;
  customList.innerHTML = customprintingavailable;
  printList.innerHTML = printtype;
  handlesList.innerHTML = handles;
  materialList.innerHTML = material;
  minimumList.innerHTML = minimumorderquantity;
  sustainList.innerHTML = sustainability;
};



//productInformation-function
const productInformation = (data) => {
  const { leadItems, regionAvailable } = data.availability;
  leadItemsList.innerHTML = leadItems;
  regionAvailableList.innerHTML = regionAvailable;

  const{pcr}=data.sustainability;
  ulsustainability.innerHTML=pcr;

  data.features.forEach((dt) => {
    let li = document.createElement("li");
    var temp=""
    temp+=`${dt}`
    li.innerHTML=temp;
    ulfeatures.appendChild(li);
  });

  data.customisation.forEach((dt) => {
    let l = document.createElement("li");
    var temp1=""
    temp1+=`${dt}`;
    l.innerHTML+=temp1;
    ulCustomisation.appendChild(l);
  });

  data.product.forEach((dt) => {
    let li = document.createElement("li");
    var temp=""
    temp+=`${dt}`
    li.innerHTML=temp;
    ulproductUsage.appendChild(li);
  });

  data.benefits.forEach((dt) => {
    let li = document.createElement("li");
    var temp=""
    temp+=`${dt}`
    li.innerHTML=temp;
    ulbenefits.appendChild(li);
  });

};
