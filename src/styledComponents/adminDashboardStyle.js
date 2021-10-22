import styled, { createGlobalStyle } from "styled-components";

const AdminDashboardStyle = createGlobalStyle`
.dashboard{
  min-height: 100vh;
  position: relative;
  display: flex;
}
.dashboard-content {
  padding: 2vw;
  width: calc(100vw - 65px);
}
.dashboard nav{
  background: linear-gradient(180deg,#1f5da4 0%,#1d3164 100%);
  position: relative;
}
.side-dash-ico{
  font-size: 1.75em;
}
.dashboard-sidebar{
  max-width: 250px;
  min-height: inherit;
  overflow: hidden;

}
.sidebar-username{
  overflow: hidden;
}
.sidenav-subnav{
  background:#2b2b2b;
}
`;
export const DButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;
export default AdminDashboardStyle;
