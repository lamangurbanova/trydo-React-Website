import React from "react";

import Button from "../../components/Button";

const PricingItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-30">
      <div className={` ${props.class} pricing-table-inner`}>
        <div className="pricing-header">
          <h4 className="title">{props.title}</h4>
          <div className="pricing">
            <span className="price">{props.price}</span>
            <span className="subtitle">{props.subtitle}</span>
          </div>
        </div>
        <div className="pricing-body">
          <ul className="list-unstyled">
            <li className="mx-0 mb-2">
              <i class="fa-solid fa-check me-2"></i>5 PPC Campaigns
            </li>
            <li className="mx-0 mb-2">
              <i class="fa-solid fa-check me-2"></i>
              Digital Marketing
            </li>
            <li className="mx-0 mb-2">
              <i class="fa-solid fa-check me-2"></i>
              Marketing Agency
            </li>
            <li className="mx-0 mb-2">
              <i class="fa-solid fa-check me-2"></i>
              Seo Friendly
            </li>
            <li className="mx-0 mb-2">
              <i class="fa-solid fa-check me-2"></i>
              UI/UX designs
            </li>
          </ul>
        </div>
        <div className="pricing-footer d-flex justify-content-center">
          <Button className="rn-btn" name="Purchase Now" />
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
