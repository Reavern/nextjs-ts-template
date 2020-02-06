import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import ReactPaginate from 'react-paginate';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    Badge,
    Media,
    FormGroup,
    Input
} from "reactstrap";

import AdminLayout from '../../../layouts/AdminLayout';
import Header from "../../../components/Headers/Header";

import { withAdminAuth } from '~/src/utils/withAdminAuth';


import _ from 'lodash';

import { SortableTableHead, filterItem, getItems } from '~/src/utils/TableHelper';

const TableRow = ({ name }) => {

    return (
        <tr>
            <th scope="row">
                <Media className="align-items-center">
                    <span className="mb-0 text-sm">{name}</span>
                </Media>
            </th>
            <td>$2,500 USD</td>
            <td>
                <Badge color="" className="badge-dot mr-4">
                    <i className="bg-warning" />pending
                </Badge>
            </td>
            <td>AAAAA</td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="mr-2">60%</span>
                    <div>
                        <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                        />
                    </div>
                </div>
            </td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Action
                                                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Another action
                                                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Something else here
                                                            </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
}


const DashboardTablePage: NextPage<{ userAgent: string }> = () => {

    const SAMPLE = [
        {
            name: 'Farell'
        },
        {
            name: 'PILO'
        },
        {
            name: 'BABI'
        },
        {
            name: 'MEMEK'
        },
        {
            name: 'KONTOL'
        },
        {
            name: 'JEMBOT'
        },
        {
            name: 'Farell'
        },
        {
            name: 'PILO'
        },
        {
            name: 'BABI'
        },
        {
            name: 'MEMEK'
        },
        {
            name: 'KONTOL'
        },
        {
            name: 'JEMBOT'
        },
        {
            name: 'Farell'
        },
        {
            name: 'PILO'
        },
        {
            name: 'BABI'
        },
        {
            name: 'MEMEK'
        },
        {
            name: 'KONTOL'
        },
        {
            name: 'JEMBOT'
        },
    ];

    const [text, setText] = useState('');
    const [currPage, setCurrPage] = useState(0);

    const [sortPath, setSortPath] = useState('');
    const [flag, setFlag] = useState(true);

    function setSortData(path) {
        setSortPath(path);
        setFlag(!flag);
    }

    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AdminLayout>
                {/* <Header /> */}
                <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
                {/* Page content */}
                <Container className="mt--7" fluid>

                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h3 className="mb-0">Page visits</h3>
                                        </div>
                                        <div className="col text-right">
                                            <Button
                                                color="primary"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                See all
                                                </Button>
                                        </div>
                                    </Row>

                                </CardHeader>
                                <CardBody className="bg-secondary">
                                    <Row className="align-items-center">
                                        <Col lg="6">
                                            <FormGroup>
                                                {/* <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Username
                                                </label> */}
                                                <Input
                                                    className="form-control-alternative"
                                                    placeholder="Search"
                                                    type="text"
                                                    value={text}
                                                    onChange={(e) => {
                                                        setText(e.target.value);
                                                        setCurrPage(0);
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                </CardBody>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <SortableTableHead
                                                title={'Name '}
                                                currPath={sortPath}
                                                flag={flag}
                                                path={'name'}
                                                setSortData={setSortData}
                                            />
                                            <th scope="col">Budget</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Users</th>
                                            <th scope="col">Completion</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            SAMPLE ?
                                                getItems(SAMPLE, text, ['name'], currPage, sortPath, flag).map((data) => {
                                                    return (
                                                        <TableRow name={data.name} />
                                                    );
                                                }) : null
                                        }
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <nav className="justify-content-end mb-0 pagination" >
                                            <ReactPaginate
                                                onPageChange={({ selected }) => setCurrPage(selected)}

                                                breakLabel={'...'}
                                                breakClassName={'break-me'}
                                                pageCount={filterItem(SAMPLE, text, ['name']).length / 10}
                                                marginPagesDisplayed={2}
                                                pageRangeDisplayed={3}

                                                containerClassName={'pagination justify-content-end mb-0'}

                                                pageClassName={'page-item'}
                                                pageLinkClassName={'page-link'}
                                                activeClassName={'active'}

                                                previousLabel={<i className="fas fa-angle-left" />}
                                                previousClassName={'page-item'}
                                                previousLinkClassName={'page-link'}

                                                nextLabel={<i className="fas fa-angle-right" />}
                                                nextClassName={'page-item'}
                                                nextLinkClassName={'page-link'}
                                                forcePage={currPage}
                                            />
                                        </nav>

                                    </nav>

                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </AdminLayout>

        </div>

    );
}


export default withAdminAuth(DashboardTablePage);