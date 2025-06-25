import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../features/categories/categoriesSlice';

const Header = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/produkty');
  };

  return (
    <header className={styles.header}>
      <Container>
        <Navbar expand="sm" variant="light" className="px-0">
          <Link to="/" className={clsx('navbar-brand', styles.logo)}>
            <img src="/images/logo/logo.png" alt="Logo Atelier Rzeczy Innych" />
          </Link>
          <Navbar.Toggle aria-controls="mainNavbar" />
          <Navbar.Collapse id="mainNavbar" className="justify-content-end">
            <Nav className="align-items-center gap-3">
              <Nav.Item as="li"
                className={styles.dropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <a href="/produkty" className={clsx('nav-link', styles.link)} onClick={handleClick}>
                  Produkty <FaChevronDown size={12} className={styles.icon} />
                </a>
                {showDropdown && (
                  <ul className={styles.menu}>
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link to={`/kategoria/${cat.slug}`} className={styles.menuItem}>
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/koszyk" className={clsx('nav-link', styles['cart-icon'])}>
                  <FaShoppingCart size={20} />
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
