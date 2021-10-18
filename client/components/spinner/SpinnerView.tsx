import React, { FC, useEffect } from "react";
import { Container } from "react-bootstrap";

import Spinner from 'react-bootstrap/Spinner';

const SpinnerView: FC<{setIsLoading: (e: boolean) => void }> = ({
    setIsLoading, 

}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <Container>
            <Spinner animation="border" />
        </Container>
    );
}

export default SpinnerView;
