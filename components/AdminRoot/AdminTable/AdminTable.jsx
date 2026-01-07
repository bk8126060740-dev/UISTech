import SvgIcon from "@/assests/icons/SvgIcon";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import AdminSearch from "../adminSearch/AdminSearch";
import './AdminTable.css';

const AdminTable = ({ headRow, data, handleEdit, handleDelete, handleDetailsShow, type }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [tblData, setTblData] = useState(data || [])
    const [value, setValue] = useState('');

    useEffect(() => {
        if (value) {
            const filterdata = tblData.length > 0 && tblData.filter((item) => {
                return (
                    item?.jobtitle?.toLowerCase().includes(value.toLowerCase()) ||
                    item?.location?.toLowerCase().includes(value.toLowerCase()) ||
                    item?.professiontitle?.toLowerCase().includes(value.toLowerCase()) ||
                    item?.professionkeyname?.toLowerCase().includes(value.toLowerCase()) ||
                    item?.description?.toLowerCase().includes(value.toLowerCase())
                );
            });
            setTblData(filterdata && filterdata.length > 0 ? filterdata : data);
        } else {
            setTblData(data);
        }
        setPage(0);
    }, [value]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 20));
        setPage(0);
    };

    const handlePrint = (data) => {
        const fileUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
        const printWindow = window.open(fileUrl, '_blank');
        printWindow.onload = function () {
            printWindow.print();
        };
    };

    const handleDownload = (data) => {
        const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
        const a = document.createElement("a");
        a.href = url;
        let name = url.split('/').pop();
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    const paginatedData = useMemo(() => {
        return rowsPerPage > 0
            ? tblData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : tblData;
    }, [tblData, page, rowsPerPage]);

    return (
        <>
            <Box className='search-pagination'>
                <AdminSearch value={value} setValue={setValue} />
                {
                    data.length > 10 &&
                    <TablePagination
                        component="div"
                        className="tablePagination"
                        count={tblData.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[20, 50, { label: 'All', value: -1 }]}
                    />
                }
            </Box>
            <TableContainer component={Paper} className="tableContainer">
                <div className="tableWrapper">
                    <Table className="table_main" size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                {/* <TableCell padding="checkbox" className="tbl_head_td">
                                    <Checkbox
                                        color="primary"
                                    // checked={false}
                                    // onChange={(event) => handleSelectRow(event, item)}
                                    />
                                </TableCell> */}
                                {
                                    headRow && headRow.length > 0 && headRow.map((item, i) => {
                                        return (
                                            <TableCell align="left" key={item?.keyName || i} className={`tbl_head_td ${item?.keyName === 'action' ? 'action' : ''}`}>
                                                {item?.title}
                                            </TableCell>
                                        );
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                paginatedData.length > 0 && paginatedData.map((item, i) => {
                                    return (
                                        <TableRow key={`$_${i}`}>
                                            {/* <TableCell padding="checkbox" className="tbl_body_td">
                                                <Checkbox
                                                    color="white"
                                                // checked={false}
                                                // onChange={(event) => handleSelectRow(event, item)}
                                                />
                                            </TableCell> */}
                                            {
                                                headRow && headRow.length > 0 && headRow.map((row, i) => {
                                                    let description = (row?.keyName === 'work_details' || row?.keyName === 'description')
                                                        ? String(item[row?.keyName]).slice(0, 120) + '...'
                                                        : '';

                                                    return (
                                                        <TableCell align="left" key={row?.keyName || i} className={`tbl_body_td ${row?.keyName === 'action' ? 'action' : ''}`}>
                                                            {
                                                                row?.keyName === 'action' ?
                                                                    <Box className='icon_row'>
                                                                        {
                                                                            type && type === 'file' ?
                                                                                <SvgIcon name='download' className='download' onClick={() => handleDownload(item)} />
                                                                                :
                                                                                <SvgIcon name='edit' className='edit' onClick={() => handleEdit(item)} />
                                                                        }
                                                                        <SvgIcon name='delete' className='delete' onClick={() => handleDelete(item)} />
                                                                        <SvgIcon name='ibutton' className='ibutton' onClick={() => handleDetailsShow(item)} />
                                                                    </Box>
                                                                    : row?.keyName === 'resumefile' ?
                                                                        <Box className='image_Box' id="pdf-iframe" onClick={() => handlePrint(item)}>
                                                                            <Image src={require('../../../assests/images/pdgimage.png')} alt='pdf image' width={50} height={50} />
                                                                        </Box>
                                                                        :
                                                                        description ? description : item[row?.keyName]
                                                            }
                                                        </TableCell>
                                                    );
                                                })
                                            }
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            </TableContainer>
        </>
    );
}

export default AdminTable;
