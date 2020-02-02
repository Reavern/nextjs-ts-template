import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";

import AuthLayout from '../../layouts/AuthLayout';

import Link from 'next/link';

const AdminLoginPage: NextPage<{ userAgent: string }> = () => (
    <html>
        <Head>
            <title>Admin</title>
        </Head>
        <body>
            <AuthLayout>
                <Col lg="5" md="7">
                    <Card className="bg-secondary shadow border-0">
                        {/* <CardHeader className="bg-transparent pb-5">
                            <div className="text-muted text-center mt-2 mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div className="btn-wrapper text-center">
                                <Button
                                    className="btn-neutral btn-icon"
                                    color="default"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    <span className="btn-inner--icon">
                                        <img
                                            alt="..."
                                            src={require("../../assets/img/icons/common/github.svg")}
                                        />
                                    </span>
                                    <span className="btn-inner--text">Github</span>
                                </Button>
                                <Button
                                    className="btn-neutral btn-icon"
                                    color="default"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    <span className="btn-inner--icon">
                                        <img
                                            alt="..."
                                            src={require("../../assets/img/icons/common/google.svg")}
                                        />
                                    </span>
                                    <span className="btn-inner--text">Google</span>
                                </Button>
                            </div>
                        </CardHeader> */}
                        <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                                Login
                            </div>
                            <Form role="form">
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Email" type="email" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Password" type="password" />
                                    </InputGroup>
                                </FormGroup>
                                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                                    <input
                                        className="custom-control-input"
                                        id=" customCheckLogin"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor=" customCheckLogin"
                                    >
                                        <span className="text-muted">Remember me</span>
                                    </label>
                                </div> */}
                                <div className="text-center">
                                    <Link href="/admin/dashboard">
                                    <Button className="my-4" color="primary" type="button">
                                        Sign in
                                    </Button>
                                    </Link>
                                    
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    {/* <Row className="mt-3">
                        <Col xs="6">
                            <a
                                className="text-light"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <small>Forgot password?</small>
                            </a>
                        </Col>
                        <Col className="text-right" xs="6">
                            <a
                                className="text-light"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <small>Create new account</small>
                            </a>
                        </Col>
                    </Row> */}
                </Col>
            </AuthLayout>
        </body>
    </html>
);


export default AdminLoginPage;