import React from 'react';
import useForm from '../useForm';
import { Button, Form, Alert, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CreditCardForm.css";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const CreditCardForm = () => {
    const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
    return (
        
        <div className='container'>
            <div className='box justify-content-center align-item-center'>
                <div className='form-div'>
                    <div className='credit-card'>
                        <Cards
                            cvc={values.cvc}
                            expiry={values.expiration}
                            focused={values.focus}
                            name={values.name}
                            number={values.number}
                        />
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                id='name'
                                name="name"
                                placeholder='Cardholder Name'
                                value={values.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                isValid={errors.cname}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type='number'
                                id='number'
                                name='number'
                                placeholder='Card Number'
                                value={values.number}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                isValid={errors.cnumber}
                            />
                        </Form.Group>
                         <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Control
                                        type='number'
                                        id='expiration'
                                        name='expiration'
                                        placeholder='MM/YY Expiry'
                                        value={values.expiration}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        isValid={errors.cexp}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Control
                                        type='number'
                                        id='cvc'
                                        name='cvc'
                                        placeholder='CVC'
                                        value={values.cvc}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        isValid={errors.ccvc}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                   <Button size="block" id="validateButton" type="submit">Validate</Button>
                </Form>
            </div>
            <Alert id="alertMessage" variant={errors.variant} show={errors.show}>
                    {errors.message}
            </Alert>
         </div>
        </div>
       
    );
};

export default CreditCardForm;

