"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Star,
  StarHalf,
  Share,
  MapPin,
  Lock,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { products } from "@/lib/productData";
import { MAX_QUANTITY, useCart } from "@/context/CartContext";

const productGalleryById = {
  mld: [
    "/images/products/mld/mld.jpg",
    "/images/products/mld/mld-box-front.jpg",
    "/images/products/mld/mld-bottle.jpg",
    "/images/products/mld/mld-back.jpg",
    "/images/products/mld/mld-with-bottel.jpg",
  ],
  "mineral-mixture": [
    "/images/products/minral/minral-bag-fornt-5kg.jpg",
    "/images/products/minral/minral-fornt.jpg",
    "/images/products/minral/mineral-bakit-front.jpg",
    "/images/products/minral/minarl-side.jpg",
    "/images/products/minral/minarl-bag-back.jpg",
  ],
  "calf-supplement": [
    "/images/products/calf/calf-front.jpg",
    "/images/products/calf/calf-front-open.jpg",
    "/images/products/calf/calf-box-open.jpg",
    "/images/products/calf/calf-back.jpg",
    "/images/products/calf/calf-bakit.jpg",
  ],
  "dairy-guruji-h": [
    "/images/products/h/h-500ml.jpg",
    "/images/products/h/h-bottel-front.jpg",
    "/images/products/h/h-box-with-bottel.jpg",
    "/images/products/h/edited-back.jpg",
  ],
  "bypass-fat": [
    "/images/products/bypass/bypass-fat.jpg",
    "/images/products/bypass/bypass-10kg-bakit.jpg",
    "/images/products/bypass/bypass-10kg-bakit-back.jpg",
    "/images/products/bypass/edited-photo.jpg",
  ],
  "dairy-guruji-gel": [
    "/images/products/gel/gel.jpg",
    "/images/products/gel/gel-box-front.jpg",
    "/images/products/gel/gel-bottel.jpg",
    "/images/products/gel/gel-bottel-with-box.jpg",
    "/images/products/gel/edited-photo.jpg",
  ],
  calcium: [
    "/images/products/calcium/calcium-can-5lt-1st.jpg",
    "/images/products/calcium/calcium-can-2nd.jpg",
    "/images/products/calcium/calcium-fornt-20ltr-1st.jpg",
    "/images/products/calcium/calcium-20ltr-front-2nd.jpg",
    "/images/products/calcium/calcium-back-side-20ltr-3rd.jpg",
  ],
  "liver-tonic": [
    "/images/products/liver/liver-tonic.jpg",
    "/images/products/liver/liver-tonic-bottel.jpg",
    "/images/products/liver/liver-tonic-500ml.jpg",
    "/images/products/liver/liver-tonic-open.jpg",
    "/images/products/liver/edited-photo.jpg",
  ],
  "deworming-bolus": [
    "/images/products/deworming/deworming-box-1.jpg",
    "/images/products/deworming/deworming-box-with-tab.jpg",
    "/images/products/deworming/deworming-two-pack.jpg",
    "/images/products/deworming/deworming-side.jpg",
    "/images/products/deworming/deworming-bottom.jpg",
  ],
};

function getProductGallery(product) {
  const gallery = productGalleryById[product.id] || [];
  const fallback = product.image ? [product.image] : [];
  const uniqueImages = Array.from(new Set([...gallery, ...fallback]));
  return uniqueImages.length ? uniqueImages : ["/images/products/mld.jpeg"];
}

function RatingStars({ count }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex text-secondary">
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <StarHalf className="h-4 w-4 fill-current" />
      </div>
      <Link href="#" className="text-sm font-medium text-primary hover:text-primary/80 hover:underline">
        {count} ratings
      </Link>
    </div>
  );
}

export default function ProductDetailClient({ product }) {
  const router = useRouter();
  const { addToCart, setBuyNowItem } = useCart();
  const composition = product.composition || product.nutritionalValue;
  const benefits = product.benefitsHindi ?? product.benefits ?? [];
  const price = product.price || 1099;
  const mrp = product.mrp || 1299;
  const brand = product.brand || "DAIRY GURUJI";
  const stock = product.stock ?? 5;
  const reviewCount = product.reviewCount || 128;
  const originalVariants = product.variants || [
    { label: "1 Kg", price: 349, mrp: 450 },
    { label: "5 Kg", price: 1099, mrp: 1299, isDefault: true },
  ];

  const galleryImages = useMemo(() => getProductGallery(product), [product]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const [selectedVariant, setSelectedVariant] = useState(
    originalVariants.find((v) => v.isDefault) || originalVariants[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [toastMessage, setToastMessage] = useState("");
  const imageContainerRef = useRef(null);

  const currentPrice = selectedVariant ? selectedVariant.price : price;
  const currentMrp = selectedVariant ? selectedVariant.mrp : mrp;
  const currentDiscount = selectedVariant 
    ? Math.round(((currentMrp - currentPrice) / currentMrp) * 100)
    : Math.round(((mrp - price) / mrp) * 100);

  const mainImage = galleryImages[selectedImageIndex] || galleryImages[0] || product.image;

  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const isOutOfStock = stock <= 0;
  const maxAllowedQty = Math.max(1, Math.min(MAX_QUANTITY, stock || MAX_QUANTITY));

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setToastMessage("");
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  useEffect(() => {
    if (quantity > maxAllowedQty) {
      setQuantity(maxAllowedQty);
    }
  }, [maxAllowedQty, quantity]);

  const selectedItem = {
    productId: product.id,
    name: product.name,
    price: currentPrice,
    quantity,
    variantLabel: selectedVariant?.label || "",
    image: mainImage,
  };

  const handleAddToCart = () => {
    if (isOutOfStock) {
      return;
    }

    addToCart(selectedItem, quantity);
    setToastMessage("Added to cart");
  };

  const handleBuyNow = () => {
    if (isOutOfStock) {
      return;
    }

    setBuyNowItem(selectedItem, quantity);
    router.push("/checkout?source=buy-now");
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const deliveryDate = tomorrow.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
  });

  return (
    <div className="min-h-screen bg-white pb-16 pt-20 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <div className="mb-4 text-xs font-normal text-gray-500 flex items-center gap-1">
          <Link href="/products" className="hover:underline">Products</Link>
          <span>›</span>
          <span className="text-gray-900 line-clamp-1">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 relative">
          
          {/* --- LEFT COLUMN: Image Gallery --- */}
          <div className="w-full lg:w-[45%] flex flex-col-reverse lg:flex-row gap-4 lg:sticky lg:top-24 h-fit">
            
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:h-[500px] w-full lg:w-16 flex-shrink-0 hide-scrollbar pb-2 lg:pb-0">
              {galleryImages.map((image, index) => {
                const isActive = index === selectedImageIndex;
                return (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onMouseEnter={() => setSelectedImageIndex(index)}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex h-12 w-12 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded border p-1 transition bg-white ${
                      isActive ? "border-primary shadow-[0_0_3px_2px_rgba(31,125,70,0.3)]" : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </button>
                );
              })}
            </div>

            {/* Main Image with Zoom */}
            <div 
              ref={imageContainerRef}
              className="relative flex-1 bg-white flex items-center justify-center h-[350px] lg:h-[500px] cursor-crosshair group overflow-hidden"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <button className="absolute right-2 top-2 z-10 rounded-full border border-gray-200 bg-white p-2 shadow-sm focus:outline-none">
                <Share className="h-4 w-4 text-gray-600" />
              </button>

              <Image
                src={mainImage}
                alt={product.name}
                width={640}
                height={640}
                priority
                className={`h-full w-auto object-contain transition-opacity duration-200 ${isZoomed ? "opacity-0" : "opacity-100"}`}
              />

              {isZoomed && (
                <div 
                  className="absolute inset-0 z-50 bg-white pointer-events-none"
                  style={{
                    backgroundImage: `url(${mainImage})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: '200%',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
            </div>
          </div>

          {/* --- MIDDLE COLUMN: Product Details --- */}
          <div className="w-full lg:w-[35%] flex flex-col font-sans text-gray-900">
            <h1 className="text-[22px] font-medium leading-tight">
              {product.name}, {product.problem}
            </h1>
            
            <Link href="#" className="mt-1 text-sm font-medium text-primary hover:text-primary/80 hover:underline">
              Brand: {brand}
            </Link>

            <div className="mt-1 pb-2 border-b border-gray-200">
              <RatingStars count={reviewCount} />
            </div>

            <div className="mt-3">
              <div className="flex items-start gap-2">
                <span className="text-3xl font-light text-primary">-{currentDiscount}%</span>
                <span className="text-[32px] font-medium flex items-start">
                  <span className="text-sm mt-1.5 mr-0.5">₹</span>
                  {currentPrice.toLocaleString()}
                </span>
              </div>
              <div className="text-[13px] text-gray-600 font-medium">
                M.R.P.: <span className="line-through">₹{currentMrp.toLocaleString()}</span>
              </div>
              <div className="text-[13px] font-normal mt-0.5">Inclusive of all taxes</div>
              <div className="text-[14px] mt-1">
                <span className="font-bold">EMI</span> starts at ₹100. <span className="text-primary cursor-pointer hover:underline hover:text-primary/80">EMI options</span>
              </div>
            </div>

            {/* Service Badges (Amazon Style horizontal list) */}
            <div className="mt-4 py-3 border-t border-b border-gray-200 flex gap-4 overflow-x-auto hide-scrollbar text-center text-primary">
              {[
                { icon: RotateCcw, text: "7 days Replacement" },
                { icon: Truck, text: "Free Delivery" },
                { icon: ShieldCheck, text: "1 Year Warranty" },
                { icon: Lock, text: "Secure transaction" },
              ].map((service, idx) => (
                <div key={idx} className="flex min-w-[70px] flex-col items-center gap-1 cursor-pointer">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <service.icon className="h-8 w-8 text-gray-600" strokeWidth={1} />
                  </div>
                  <span className="text-[11px] leading-tight font-medium w-[70px]">{service.text}</span>
                </div>
              ))}
            </div>

            {/* Variants */}
            {originalVariants.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-normal text-gray-600 mb-2">
                  Size: <span className="font-bold text-gray-900">{selectedVariant?.label}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {originalVariants.map((v) => {
                    const isSelected = selectedVariant?.label === v.label;
                    return (
                      <button
                        key={v.label}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3 py-1.5 border text-sm text-center transition min-w-[60px] ${
                          isSelected
                            ? "border-primary bg-primary/5 text-gray-900 font-semibold"
                            : "border-gray-300 hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <div>{v.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Specs Grid */}
            <div className="mt-5 border-t border-gray-200 pt-4">
              <div className="grid grid-cols-[140px_1fr] gap-y-2 text-[14px]">
                <div className="font-bold">Brand</div>
                <div>{brand}</div>
                <div className="font-bold">Flavour</div>
                <div>Herbal</div>
                <div className="font-bold">Item Form</div>
                <div>{product.tag?.includes("Liquid") ? "Liquid" : "Powder"}</div>
                <div className="font-bold">Item Weight</div>
                <div>{selectedVariant?.label || product.pack || "5 Kilograms"}</div>
                {composition && (
                   <>
                     <div className="font-bold">Active Ingredients</div>
                     <div>{composition[0]?.label || "Herbal extracts"}</div>
                   </>
                )}
              </div>
            </div>

            {/* About this item */}
            <div className="mt-5 border-t border-gray-200 pt-4 pb-8">
              <h3 className="font-bold text-base mb-2">About this item</h3>
              <ul className="list-disc pl-5 text-[14px] space-y-1.5 text-gray-800">
                <li>{product.description}</li>
                {benefits.slice(0, 4).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
                <li>{product.specialNote || "Improves overall health and productivity of dairy animals."}</li>
              </ul>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Buy Box --- */}
          <div className="w-full lg:w-[20%] font-sans">
            <div className="border border-gray-200 rounded-lg p-4 lg:sticky lg:top-24 bg-white">
              
              <div className="text-[28px] font-medium leading-tight">
                <span className="text-sm align-top mr-1">₹</span>
                {currentPrice.toLocaleString()}
              </div>
              <div className="text-[13px] text-gray-500 font-medium">
                M.R.P.: <span className="line-through">₹{currentMrp.toLocaleString()}</span>
              </div>

              <div className="text-[14px] mt-3">
                <span className="text-primary hover:text-primary/80 hover:underline cursor-pointer">FREE delivery</span> <span className="font-bold">Tomorrow, {deliveryDate}</span> on orders over ₹499.
              </div>

              <div className="mt-4 flex items-start gap-1 cursor-pointer group">
                <MapPin className="h-4 w-4 text-gray-800 mt-0.5" />
                <span className="text-[13px] text-primary group-hover:text-primary/80 group-hover:underline leading-tight">
                  Deliver to Sonipat 131301
                </span>
              </div>

              <div className="mt-4 text-[18px] font-medium text-primary">
                {stock <= 0 ? "Out of stock" : stock < 5 ? `Only ${stock} left in stock.` : "In stock"}
              </div>

              <div className="mt-2 text-[14px] flex flex-col gap-0.5">
                <div className="flex gap-4">
                  <span className="text-gray-500 w-16">Ships from</span>
                  <span className="text-gray-900">{brand}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500 w-16">Sold by</span>
                  <span className="text-primary cursor-pointer hover:underline">{brand}</span>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4 mb-4">
                <label className="text-[13px] w-max shadow-sm border border-gray-300 rounded-lg px-2 py-1.5 flex items-center gap-1.5 bg-[#f0f2f2] hover:bg-[#e3e6e6] cursor-pointer focus-within:ring-2 focus-within:ring-primary">
                  <span>Qty:</span>
                  <select 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))} 
                    className="bg-transparent font-medium outline-none cursor-pointer border-none"
                    disabled={isOutOfStock}
                  >
                    {Array.from({ length: maxAllowedQty }, (_, i) => i + 1).map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isOutOfStock}
                  className="w-full bg-secondary hover:bg-secondary/90 active:bg-secondary/80 rounded-full py-2 px-4 text-sm font-bold text-gray-900 text-center shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  disabled={isOutOfStock}
                  className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80 rounded-full py-2 px-4 text-sm font-bold text-white text-center shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Buy Now
                </button>
              </div>
              {toastMessage ? (
                <p className="mt-3 rounded-md border border-green-100 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
                  {toastMessage}. <Link href="/cart" className="underline">View cart</Link>
                </p>
              ) : null}

              <div className="mt-4 flex items-center gap-2 cursor-pointer group">
                <Lock className="h-4 w-4 text-gray-500" />
                <span className="text-[13px] text-[#007185] group-hover:text-[#c45500] group-hover:underline">
                  Secure transaction
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full text-left rounded-md border border-gray-300 bg-white px-3 py-1.5 text-[13px] font-normal shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-gray-50">
                  Add to Wish List
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* --- EXTENDED PRODUCT DETAILS SECTION --- */}
        <div className="mt-8 pt-8 border-t border-gray-200 font-sans grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          
          <div className="flex flex-col gap-8">
            {/* Product Description */}
            <div>
              <h2 className="text-primary font-bold text-[18px] mb-3">Product Description</h2>
              <div className="text-[14px] leading-relaxed text-gray-800 space-y-4">
                <p>{product.description}</p>
                {product.specialNote && <p className="font-medium">{product.specialNote}</p>}
                
                {product.benefitsHindi && product.benefitsHindi.length > 0 && (
                  <div>
                    <h3 className="font-bold text-[15px] mb-2">{product.benefitsHindiTitle || "Key benefits"}</h3>
                    <ul className="list-disc pl-5 space-y-1.5">
                      {product.benefitsHindi.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Feeding Instructions */}
            {product.feedingInstructions && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h2 className="text-primary font-bold text-[18px] mb-3">Feeding & Dosage Instructions</h2>
                <div className="space-y-3 text-[14px]">
                  {product.feedingInstructions.items?.map((item, idx) => (
                     <div key={idx} className="flex flex-col sm:flex-row sm:gap-4 border-b border-gray-200 pb-2.5 last:border-0 last:pb-0">
                       <span className="font-bold w-[200px] shrink-0 text-gray-700">{item.label}</span>
                       <span className="text-gray-900 mt-0.5 sm:mt-0">{item.value}</span>
                     </div>
                  ))}
                  {product.feedingInstructions.note && (
                    <div className="mt-2 pt-2 text-primary/80 italic">
                      Note: {product.feedingInstructions.note}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Additional Info Table */}
            <div>
              <h2 className="text-primary font-bold text-[18px] mb-3">Important Information</h2>
              <table className="w-full text-[14px] border border-gray-200 text-left">
                <tbody>
                  {[
                    { label: "Suitable For", value: product.suitableFor?.join(", ") },
                    { label: "Key Ingredients", value: product.keyIngredients?.join(", ") },
                    { label: "Usage Tips", value: product.usageTips?.join(" ") },
                    { label: "Expected Timeline", value: product.expectedTimeline },
                    { label: "Best Time To Use", value: product.bestTimeToUse },
                    { label: "Storage", value: product.storage },
                    { label: "Packaging", value: product.packaging },
                  ].filter(item => item.value).map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
                      <th className="py-2.5 px-4 font-bold text-gray-700 w-[150px] sm:w-[200px] align-top bg-[#f3f3f3] border-r border-gray-200">{item.label}</th>
                      <td className="py-2.5 px-4 text-gray-900 bg-white leading-relaxed">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Composition / Nutritional Value */}
            {(product.composition || product.nutritionalValue) && (
              <div>
                <h2 className="text-primary font-bold text-[18px] mb-3">Nutritional Value & Composition</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[14px]">
                  {(product.composition || product.nutritionalValue).map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-gray-200 py-1.5 border-dashed">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-semibold text-gray-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
          
          <div className="flex flex-col gap-6 font-sans">
            {/* Farmer Story Sidebar */}
            {product.farmerStory && (
               <div className="border border-gray-300 rounded-lg p-5 bg-white drop-shadow-sm h-max lg:sticky lg:top-24">
                 <h3 className="font-bold text-[16px] mb-3 flex items-center gap-2">
                   <div className="h-6 w-1 bg-primary"></div> Customer Success Story
                 </h3>
                 <p className="text-[14px] italic text-gray-700 leading-relaxed mb-4">
                   "{product.farmerStory.quote}"
                 </p>
                 <div className="text-[13px] text-gray-600">
                   <p className="font-bold text-gray-900">{product.farmerStory.name}</p>
                   <p>{product.farmerStory.location}</p>
                 </div>
                 <div className="mt-4 pt-3 border-t border-gray-200">
                   <p className="text-[12px] uppercase text-gray-500 font-bold tracking-wider mb-1">Result</p>
                   <p className="text-[13px] text-primary font-medium">{product.farmerStory.result}</p>
                 </div>
               </div>
            )}
          </div>
        </div>

        {/* Similar Products Section */}
        <section className="mt-16 pt-8 border-t border-gray-200 font-sans">
          <h2 className="text-primary font-bold text-[18px] mb-4">
            Customers who viewed this item also viewed
          </h2>
          
          <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4">
            {products
              .filter((related) => related.id !== product.id)
              .slice(0, 6)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="min-w-[180px] flex-shrink-0 group"
                >
                  <div className="h-[180px] flex items-center justify-center p-2 mb-2">
                    <Image
                      src={related.image}
                      alt={related.name}
                      width={160}
                      height={160}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="line-clamp-2 text-[14px] text-primary group-hover:text-primary/80 group-hover:underline">
                      {related.name}
                    </h3>
                    <div className="mt-1">
                      <RatingStars count={related.reviewCount || 100} />
                    </div>
                    <div className="mt-1 text-[17px] text-primary font-medium">
                      <span className="text-xs relative top-[-3px]">₹</span>
                      {(related.price || 1099).toLocaleString()}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

      </div>
    </div>
  );
}
