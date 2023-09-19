import { useLoaderData } from "react-router-dom"
import { formatPrice, customFetch } from "../utils"
import { Link } from "react-router-dom"
import { useState } from "react"

export const loader = async ({ params }) => {
   const request = await customFetch(`/products/${params.id}`)
   console.log(request.data.data)
   return { product: request.data.data }
}

function SingleProduct() {
   const { product } = useLoaderData()
   const { image, title, price, description, colors, company } = product.attributes
   const dollarAmount = formatPrice(price)
   return (
      <section className="mt-20">
         <div className="text-md breadcrumbs">
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/products">Products</Link>
               </li>
            </ul>
         </div>
         <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:w-full lg:gap-x-16">
            <img src={image} alt={`${title} image`} className="lg:w-full w-96 h-96 rounded-lg object-cover" />
            <div>
               <h1 className="capitalize text-3xl font-bold">{title}</h1>
               <h3 className="text-xl text-neutral-content mt-2 font-bold">{company}</h3>
               <p className="mt-3 text-xl">{dollarAmount}</p>
               <p className="mt-6 leading-8">{description}</p>
            </div>
         </div>
      </section>
   )
}

export default SingleProduct