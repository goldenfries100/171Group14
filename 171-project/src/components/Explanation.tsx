
function Explanation() {
    const h2style: React.CSSProperties = {
        textAlign: 'center',
        fontFamily: 'Display'

    };

    const h3style: React.CSSProperties = {
        textAlign: 'center',
        fontFamily: 'Display'
    };

    return (
    <>
        <h2 style={h2style}>Group 14: A. Agarwal, S.Chiang, D. Raj, B. Young, H. Zhu</h2>
        <h3 style={h3style}>This is our website implementing the CNN model, which performed the best out of the three models (CNN, Naive Bayes, KNN) that we developed during our testing/experimentation phase. Please input an image to test our model!</h3>
    </>
    );
}

export default Explanation;