const CardListView = (props) => {
  const { tokens } = props;

  return (
    <div>
      <h5>
        Tokens Collected:<span id="result">&nbsp;{tokens.legth}</span>
      </h5>

      <div className="grid mb-4">
        {tokens.map((tokenURI, key) => {
          return <img key={key} src={tokenURI} />;
        })}
      </div>
    </div>
  );
};

export default CardListView;
