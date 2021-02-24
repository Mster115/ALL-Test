import React, { Component, Fragment } from "react";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import {GAME_IDLE} from "../../../../constants/lab4";

class AccessibleGuideline extends Component {
    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_IDLE);
    }

    handleSubmit() {
        navigate("/Lab4/Game/CodeChangeAccessible");
    }
    render() {
        const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
        return (
            <Fragment>
                <div>
                    <h1 className="app__name">Was That Difficult?</h1>
                    <h2 className="app__instructions__small">
                        People with mobile dexterity disabilities sometimes use a keyboard
                        to navigate the page. It is imperative that elements that are
                        accessible through mouse are also navigable by keyboard. Software
                        should follow the{" "}
                        <a
                            href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            WGAC Guideline 2.1.1 Keyboard Accessible
                        </a>
                        : Make all functionality available from a keyboard. Go ahead and
                        make the changes to the code by clicking “continue”.
                    </h2>

                    <Button
                        href="#"
                        onClick={this.handleSubmit}
                        component={Link}
                        variant={"contained"}
                        color={"primary"}
                        style={buttonStyle}
                    >
                        Continue
                    </Button>
                </div>
            </Fragment>
        );
    }
}

export default AccessibleGuideline;