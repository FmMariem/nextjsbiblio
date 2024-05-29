"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import { useRouter } from "next/navigation";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "use-shopping-cart";
import CartModal from "./shoppingCart/cartModal";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react'


function Menu() {
  const { data: session } = useSession()
  const router = useRouter();
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/client">Books Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/client">
              <HomeIcon />
              Home
            </Nav.Link>
            {session? <Nav.Link onClick={() => signOut()}><LogoutIcon/>Se
déconnecter</Nav.Link>

: <Nav.Link onClick={() => signIn()}><AccountCircleIcon/>Se

connecter</Nav.Link>
}
            <Nav.Link as={Link} href="/admin/livres">
              Livres
            </Nav.Link>
            <Nav.Link as={Link} href="/admin/editeurs">
              Editeurs
            </Nav.Link>
            <Nav.Link as={Link} href="/admin/auteurs">
              Auteurs
            </Nav.Link>
            <Nav.Link as={Link} href="/admin/specialites">
              Specialites
            </Nav.Link>
            
            <Nav.Link
              onClick={() => router.push("/shoppingClient/cartProducts")}
            >
              <ShoppingBasketIcon style={{ color: "aqua" }} /> Shopping Cart
            </Nav.Link>

            <Nav.Link as={Link} href="/">
              <HelpIcon />
              Aide
            </Nav.Link>
            <button className="relative" onClick={() => handleCartClick()}>
              <ShoppingCartIcon color="warning" />
              <div
                className="rounded-full flex justify-center items-center

bg-red-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1"
              >
                {cartCount}
              </div>
            </button>
            <CartModal />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Menu;
