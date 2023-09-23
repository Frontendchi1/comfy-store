import { Form, useLoaderData, Link } from "react-router-dom";
import FromInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormChexbox";

function Filters() {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  console.log(meta);
  return (
    <Form className=" bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FromInput
        type="search"
        label="Search Product"
        name="search"
        size="input-sm"
      />
      <FormSelect
        label="Select Category"
        name="category"
        defaultValue={category}
        list={meta.categories}
        size="input-sm"
      />
      <FormSelect
        label="Select Company"
        name="company"
        defaultValue={company}
        list={meta.companies}
        size="input-sm"
      />
      <FormSelect
        label="Sort By"
        name="order"
        defaultValue={order}
        list={['a-z', 'z-a', 'high', 'low']}
        size="input-sm"
      />
      <FormRange
        label='select price'
        name='price'
        size='range-md'
        price={price}
      />
      <FormCheckbox
      size='input-sm'
      name='shipping'
      label='Free Shipping'
      defaultValue={shipping}/>
      <button type="submit" className="btn btn-primary btn-sm">search</button>
      <Link to="/products" className="btn btn-secondary btn-sm">
        reset
      </Link>
    </Form>
  );
}

export default Filters;