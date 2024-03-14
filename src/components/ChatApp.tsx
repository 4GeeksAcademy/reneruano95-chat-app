
import { Container, Row } from "react-bootstrap";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

export default function ChatApp() {
    return (
        <div className="mt-5" >
            <Container>
                <Row className="justify-content-center">
                    <div className="col-6 ">
                        <MessageList />
                        <MessageInput />
                    </div>
                </Row>
            </Container>
        </div >

    )
}