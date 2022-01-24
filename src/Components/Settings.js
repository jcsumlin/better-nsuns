import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const Settings = (props) => {
    let [enableMiniPlates, setEnableMiniPlates] = useState(false);

    function handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setEnableMiniPlates(value)
    }

    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem("enableMiniPlates", enableMiniPlates)
    }

    useEffect(() => {
        // Update the document title using the browser API
        const value = localStorage.getItem("enableMiniPlates")
        var isTrueSet = (value === 'true');
        console.log(isTrueSet, typeof isTrueSet)
        setEnableMiniPlates(isTrueSet)
    }, []);

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup check>
                    <Input type="checkbox" onChange={handleChange} checked={enableMiniPlates}/>
                    <Label check>
                        Use 2.5lb Plates?
                    </Label>
                </FormGroup>
                <Button block>
                    Save
                </Button>
            </Form>
        </div>
    );
};

Settings.propTypes = {};
Settings.defaultProps = {};

export default Settings;
