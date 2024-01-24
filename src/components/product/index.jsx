import cx from "classnames";

function Product({ className, data }) {
  function Item({ title, description, image }) {
    return (
      <div className="product-list-item">
        <div className="product-list-item-image">
          <img src={image} alt="" />
        </div>
        <div className="product-list-item-info">
          <div className="product-list-item-info-title">{title}</div>
          <div className="product-list-item-info-description">
            {description}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={cx("product", className)}>
      <div className="product-header">
        <div className="product-header-title">Our Product</div>
        <div className="product-header-description">
          Lorem ipsum dolor sit amet consectetur. Blandit velit nulla sed
          faucibus libero in nam pharetra.
        </div>
      </div>
      <div className="product-list">
        {data &&
          data?.map((content, index) => (
            <Item
              key={index}
              title={content?.title}
              description={content?.description}
              image={content.image}
            />
          ))}
      </div>
    </div>
  );
}

export default Product;
