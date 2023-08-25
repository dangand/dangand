import React from "react";

const FooterAuth = () => {
  return (
    <div className="flex items-center justify-between mt-2">
      <div>
        <select
          name="Bahasa"
          id=""
          className="w-full outline-none border-none focus:border-none text-xs"
        >
          <option value="">Indonesia</option>
          <option value="">English</option>
        </select>
      </div>
      <div className="flex items-center text-xs">
        <a href="" className="p-4">
          Bantuan
        </a>
        <a href="" className="p-4">
          Privasi
        </a>
        <a href="" className="p-4">
          Persyaratan
        </a>
      </div>
    </div>
  );
};

export default FooterAuth;
