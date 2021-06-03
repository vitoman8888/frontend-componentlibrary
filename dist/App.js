import { GlobalStyle } from './utils';
import { Button } from './components/Button';
import { Logo } from './components/Logo';
import { Header, Nav, NavItem } from './components/Nav';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const App = () => {
  return /*#__PURE__*/_jsxs("main", {
    children: [/*#__PURE__*/_jsx(GlobalStyle, {}), /*#__PURE__*/_jsxs(Header, {
      children: [/*#__PURE__*/_jsx(Logo, {}), /*#__PURE__*/_jsxs(Nav, {
        children: [/*#__PURE__*/_jsx(NavItem, {
          href: "#",
          children: "Shop"
        }), /*#__PURE__*/_jsx(NavItem, {
          href: "#",
          children: "Blog"
        }), /*#__PURE__*/_jsx(NavItem, {
          href: "#",
          children: "Location"
        }), /*#__PURE__*/_jsx(NavItem, {
          as: "button",
          onClick: e => console.log(e.target),
          children: "Contact"
        })]
      })]
    }), /*#__PURE__*/_jsxs(Header, {
      variant: "right",
      children: [/*#__PURE__*/_jsx(Logo, {
        variant: "secondary",
        href: "#"
      }), /*#__PURE__*/_jsxs(Nav, {
        children: [/*#__PURE__*/_jsx(NavItem, {
          href: "#",
          children: "Shop"
        }), /*#__PURE__*/_jsx(NavItem, {
          href: "#",
          children: "Blog"
        }), /*#__PURE__*/_jsx(NavItem, {
          href: "#",
          children: "Location"
        }), /*#__PURE__*/_jsx(NavItem, {
          href: "#",
          children: "Contact"
        })]
      })]
    }), /*#__PURE__*/_jsx(Button, {
      href: "http://google.com",
      children: "This is a button with a link"
    }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
      variant: "secondary",
      size: "large",
      disabled: true,
      children: "This is a secondary disabled button"
    }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
      variant: "tertiary",
      size: "small",
      children: "This is a tertiary button"
    })]
  });
};

export default App;