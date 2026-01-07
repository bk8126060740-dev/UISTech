"use client";
import SvgIcon from "@/assests/icons/SvgIcon";
import { HeaderNav } from "@/common/commonHeader";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import logo from "../../assests/images/Logo.png";
import { ContainedSpace, Paragraph } from "../commonUiComponents/commonUiComponents";
import Linker from "../Linker";
import DropDownMenu from "./DropDownMenu";
import "./Header.css";
import MobileDropDownMenu from "./MobileDropDownMenu";

const Header = () => {
  const sm = useMediaQuery('(max-width:1109px)')
  const openHeaderMobile = useMediaQuery('(max-width:899px)')
  const router = useRouter()
  const mobile = useMediaQuery("(max-width:899px)");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [index, setIndex] = useState(null);
  const [data, setData] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  useEffect(() => {
    if (anchorElNav === null) {
      document.body.style.overflow = "auto";
      setData(false)
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [anchorElNav]);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setData(false)
  };

  const handleHover = (i) => {
    setIndex(i);
  };

  const handleHovertoggle = useCallback((i, redirect) => {
    setIndex(index === i ? null : i)
    router.push(redirect)
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Box
      className='backdrop-blur'
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "10",
      }}
    >
      <Container
        sx={{
          paddingLeft: { xl: "48px" },
          paddingRight: { xl: "48px" },
          maxWidth: { sm: "100%", md: "xl" },
        }}
      >
        <ContainedSpace sx={{
          padding: openHeaderMobile && '0 !important'
        }}>
          <Box
            sx={{
              backgroundColor: "var(--text-white)",
              height: { md: "90px", xs: "70px" },
              margin: { md: "20px 0px 0 0px", xs: "0" },
              borderRadius: { md: "15px", xs: "0" },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: { xl: "0px 5px 6px 0px #4343432b", xs: 'none', sm: 'none' },
            }}
            className={`header-main ${isScrolled ? 'active' : ''}`}
          >
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xl: "0px", xs: "0" },
                justifyContent: "space-between",
                width: '100%'
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  width: { xl: '240px', lg: "180px", md: "150px", sm: '140px' },
                  height: { lg: "90px", md: '60px' },
                }}
              >
                <Linker href="/">
                  <Image
                    id='share-social-logo'
                    priority
                    src={logo}
                    alt="web logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    unoptimized
                    height={500}
                    width={500}
                  />
                </Linker>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  width: "175px",
                }}
              >
                {data === false ? <Linker href="/">
                  <Image
                    priority
                    src={logo}
                    alt="web logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Linker> : <Box sx={{
                  marginLeft: '-10px'
                }}>
                  <Button onClick={() => setData(false)} sx={{
                    padding: "0px"
                  }}>
                    <Box className="header-back-btn">
                      <SvgIcon name={"left-arrow"} height={10} width={10} color={"var(--text-primary)"} />
                      <Paragraph>Back</Paragraph>
                    </Box>
                  </Button>
                </Box>}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xl: "39px", lg: "15px", md: '5px' },
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    gap: { xl: "25px", lg: "14px" },
                    justifyContent: "space-between",
                  }}
                >
                  {HeaderNav.map((page, i) => {
                    let redirect_ = page.redirect
                    let submenu_ = page.submenu
                    return (
                      <Box sx={{ position: "relative" }} key={page.name}>
                        <Box
                          sx={{
                            fontFamily: "var(--poppins)",
                            color: "var(--text-dark)",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "24px",
                            textTransform: "capitalize",
                            display: "flex",
                            alignItems: "center",
                            padding: { xl: "0px" },
                            gap: "14px",
                            width: "auto",
                            minWidth: "auto",
                            padding: '10px 5px',
                            cursor: 'pointer',
                            "&:hover": {
                              color: "var(--text-primary)",
                              background: "none",
                            },
                          }}
                          className="Navbarmenu"
                          onMouseEnter={() => handleHover(i)}
                          onClick={() => handleHovertoggle(i, redirect_)}
                        >
                          {page.name}
                          {page.childmenu && (
                            <SvgIcon
                              name="down-arrow"
                              width={12}
                              height={12}
                              color="var(--text-dark)"
                              className={index === i ? "topdownarrow" : ""}
                              onClick={() => handleHover(i)}
                            />
                          )}
                        </Box>
                        <Box className='drop_main'>
                          {index === i && (
                            <DropDownMenu
                              menus={submenu_}
                              index={i}
                              removeHover={() => handleHover(null)}
                            />
                          )}
                        </Box>
                        {index === i && (
                          <Box
                            className={
                              i === 1
                                ? "header-aboutus-hidden-section" :
                                i === 2 ?
                                  "header-service-hidden-section" : ''
                            }
                            onMouseLeave={() => handleHover(null)}
                          ></Box>
                        )}
                      </Box>
                    )
                  })}
                </Box>
                <Box
                  className="header-call"
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <Linker href="tel:0612-2540193">
                    <SvgIcon name="call-fill" />
                    <Paragraph>0612-2540193</Paragraph>
                  </Linker>
                </Box>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={
                    anchorElNav === null ? handleOpenNavMenu : handleCloseNavMenu
                  }
                  color="inherit"
                  sx={{
                    padding: "0",
                    width: "35px",
                    height: "35px",
                  }}
                >
                  <SvgIcon
                    name={anchorElNav === null ? "menuline" : "header-cancle"}
                    width={anchorElNav === null ? 25 : 15}
                    height={anchorElNav === null ? 25 : 15}
                    color={"var(--bg-primary)"}
                  />
                </IconButton>
              </Box>
            </Toolbar>
          </Box>
        </ContainedSpace>
      </Container>
      {anchorElNav === null
        ? ""
        : mobile && <MobileDropDownMenu anchorElNav={setAnchorElNav} data={setData} showdata={data} />}
    </Box>
  );
};

export default Header;
