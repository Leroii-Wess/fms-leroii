// import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineArrowLeftStartOnRectangle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCog,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { PiBuildings, PiIntersectDuotone } from "react-icons/pi";
import { RiShieldUserLine } from "react-icons/ri";
// import { PiIntersectDuotone } from "react-icons/pi";

import styled from "styled-components";

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/tenant">
            <PiBuildings />
            <span>Tenant</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/administrator">
            <RiShieldUserLine />
            <span>Administrator</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/reporting">
            <HiOutlineDocumentText />
            <span>Reporting & Analytics</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/audit">
            <HiOutlineClipboardDocumentCheck />
            <span>Audit & Compliance</span>
          </StyledNavLink>
        </li>

        <div className="mt-80">
          <li>
            <StyledNavLink to="/settings">
              <HiOutlineCog />
              <span>Settings</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/logout">
              <HiOutlineArrowLeftStartOnRectangle />
              <span>Logout</span>
            </StyledNavLink>
          </li>
        </div>
      </NavList>
    </nav>
  );
}

export default MainNav;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    border-radius: 10px;

    color: var(--color-grey-50);
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-50);
    background-color: #061e47;
    border-radius: 10px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-50);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-50);
  }
`;

// import { NavLink } from "react-router-dom";
// import {
//   HiOutlineArrowLeftOnRectangle,
//   HiOutlineBookOpen,
//   HiOutlineCog,
//   HiOutlineCog6Tooth,
//   HiOutlineDocumentMagnifyingGlass,
//   HiOutlineDocumentText,
//   HiOutlineHome,
//   HiOutlineShieldExclamation,
//   HiOutlineUsers,
// } from "react-icons/hi2";

// function MainNav() {
//   return (
//     <nav>
//       <ul className="flex flex-col gap-2">
//         <li>
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               isActive
//                 ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                 : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//             }
//           >
//             <HiOutlineHome className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//             <span>Dashboard</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/users"
//             className={({ isActive }) =>
//               isActive
//                 ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                 : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//             }
//           >
//             <HiOutlineUsers className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//             <span>Users</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/case"
//             className={({ isActive }) =>
//               isActive
//                 ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                 : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//             }
//           >
//             <HiOutlineShieldExclamation className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//             <span>Case</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/rules"
//             className={({ isActive }) =>
//               isActive
//                 ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                 : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//             }
//           >
//             <HiOutlineBookOpen className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//             <span>Rules</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/configuration"
//             className={({ isActive }) =>
//               isActive
//                 ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                 : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//             }
//           >
//             <HiOutlineCog6Tooth className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//             <span>Configuration</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/audits"
//             className={({ isActive }) =>
//               isActive
//                 ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                 : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//             }
//           >
//             <HiOutlineDocumentMagnifyingGlass className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//             <span>Audits & Logs</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/flat-file"
//             className={({ isActive }) =>
//               isActive
//                 ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                 : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//             }
//           >
//             <HiOutlineDocumentText className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//             <span>Flat File</span>
//           </NavLink>
//         </li>

//         <div className="mt-48">
//           <li>
//             <NavLink
//               to="/settings"
//               className={({ isActive }) =>
//                 isActive
//                   ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                   : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//               }
//             >
//               <HiOutlineCog className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//               <span>Settings</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/logout"
//               className={({ isActive }) =>
//                 isActive
//                   ? "flex items-center gap-3 rounded-lg text-gray-800 bg-gray-100 font-medium text-lg py-3 px-6"
//                   : "flex items-center gap-3 rounded-lg text-gray-600 font-medium text-lg py-3 px-6 hover:text-gray-800 hover:bg-gray-100 transition"
//               }
//             >
//               <HiOutlineArrowLeftOnRectangle className="w-6 h-6 text-gray-400 transition group-hover:text-brand-600" />
//               <span>Logout</span>
//             </NavLink>
//           </li>
//         </div>
//       </ul>
//     </nav>
//   );
// }

// export default MainNav;
