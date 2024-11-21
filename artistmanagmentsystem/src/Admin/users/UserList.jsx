import React, { useEffect, useState } from "react";
import * as HttpClient from "../../utils/httpClient";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "./../../hooks/useQuery";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
export default function UserList() {
  const location = useLocation();
  const query = useQuery();
  const [users, setUsers] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [limit, setLimit] = useState(5);
  const fetchUsers = () => {
    HttpClient.get(
      `/users?page=${query.get("page") ? query.get("page") : 1}&limit=${limit}`,
      {},
      true
    )
      .then((data) => {
        setUsers(data.data.users);
        setMetadata(data.data.metadata);
      })
      .catch();
  };
  useEffect(() => {
    fetchUsers();
  }, [location.search, limit]);
  return (
    <div>
      <div className="border-b pb-3 mb-3">
        <h1 className="text-xl font-bold">User List</h1>
      </div>
      <table className="table table-bordered mb-4 border-b pb-3">
        <thead>
          <tr>
            <th>SN</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td>{user.role}</td>
                  <td>{user.dob}</td>
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-center gap-1 bg-slate-200 py-[15px] px-[10px] rounded-lg">
          <span>Show :</span>
          <select
            onChange={(e) => setLimit(e.target.value)}
            name="limit"
            className="bg-slate-200"
            defaultValue={limit}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div>
          <div className="flex justify-end items-center gap-1">
            {query.get("page") == 1 ? (
              <button
                disabled
                className={`inline-block ${
                  query.get("page") == 1 ? "bg-blue-300" : "bg-slate-200"
                } py-[11px] px-[15px] rounded-lg`}
              >
                <MdKeyboardDoubleArrowLeft />
              </button>
            ) : (
              <Link
                to={`/admin/users?page=1`}
                className={`inline-block ${
                  query.get("page") == 1 ? "bg-blue-300" : "bg-slate-200"
                } py-[11px] px-[15px] rounded-lg`}
              >
                <MdKeyboardDoubleArrowLeft />
              </Link>
            )}
            {[...Array(metadata.totalPages)].map((item, i) => {
              return (
                <Link
                  key={i + 1}
                  to={`/admin/users?page=${i + 1}`}
                  className={`inline-block ${
                    query.get("page") == i + 1 ? "bg-blue-300" : "bg-slate-200"
                  } py-[11px] px-[15px] rounded-lg`}
                >
                  {i + 1}
                </Link>
              );
            })}
            {query.get("page") == metadata.totalPages ? (
              <button
                disabled
                className={`inline-block bg-blue-300 py-[11px] px-[15px] rounded-lg`}
              >
                <MdKeyboardDoubleArrowRight />
              </button>
            ) : (
              <Link
                to={`/admin/users?page=${metadata.totalPages}`}
                className={`inline-block bg-slate-200 py-[11px] px-[15px] rounded-lg`}
              >
                <MdKeyboardDoubleArrowRight />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
