import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaUsers, FaGuitar } from "react-icons/fa";
import AdminLogo from "../assets/admin-logo.png";
export default function AdminSidebar({ isAsideExpand, isHovering }) {
  return (
    <>
      <div
        className={`fixed bg-[#333644] overflow-hidden py-5 pl-5 transition-all ease-in-out ${
          isAsideExpand && !isHovering ? "w-[70px]" : "w-[275px]"
        }`}
      >
        <Link
          to="/admin/dashboard"
          className={`block overflow-hidden transition-all ease-in-out ${
            isAsideExpand && !isHovering ? "w-[35px]" : "w-[275px]"
          }`}
        >
          <img
            src={AdminLogo}
            alt="Admin Logo"
            className="inline-block max-w-[140px]"
          />
        </Link>
      </div>
      <nav className="nav-menu mt-[80px]">
        <ul className="panel-main-menu">
          <li>
            <Link
              to="/admin/artits"
              className="w-full h-[50px] flex gap-2 items-center py-3 px-5 text-[18px] font-bold hover:bg-[#414452] text-[#eaeaea] border border-dashed border-transparent hover:border-admin-border-color transition-all ease-linear"
            >
              {isAsideExpand && !isHovering ? (
                <FaGuitar />
              ) : (
                <>
                  <FaGuitar />
                  <span>Artits</span>
                  <IoIosArrowDown className="ml-auto" />
                </>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/musics"
              className="w-full h-[50px] flex gap-2 items-center py-3 px-5 text-[18px] font-bold hover:bg-[#414452] text-[#eaeaea] border border-dashed border-transparent hover:border-admin-border-color transition-all ease-linear"
            >
              {isAsideExpand && !isHovering ? (
                <FaMusic />
              ) : (
                <>
                  <FaMusic />
                  <span>Musics</span>
                  <IoIosArrowDown className="ml-auto" />
                </>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="w-full h-[50px] flex gap-2 items-center py-3 px-5 text-[18px] font-bold hover:bg-[#414452] text-[#eaeaea] border border-dashed border-transparent hover:border-admin-border-color transition-all ease-linear"
            >
              {isAsideExpand && !isHovering ? (
                <FaUsers />
              ) : (
                <>
                  <FaUsers />
                  <span>Users</span>
                  <IoIosArrowDown className="ml-auto" />
                </>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
