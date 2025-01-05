export const BlockUser = ({ blockUser, edit = {}, RoseId }) => {
  const [ip, setIp] = useState(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const fetchUserIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };
  useEffect(() => {
    fetchUserIP();
  }, []);
  useEffect(() => {
    if (blockUser && ip) {
      setIsBlocked(true);
      let randomNum = Math.random();
      window.open(`https://your-access-blocked/${randomNum}`, "_self");
      <RootRemover />;
    }
  }, [blockUser, ip]);
  if (isBlocked) {
    return (
      <>
        <style jsx>{`
          .userBlockComponentActionEvent {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            user-select: none;
            z-index: 9999999;
            height: 100%;
            font-weight: bold;
            font-weight: 4rem;
            background: black;
            width: 100%;
            color: red;
            overflow: hidden;
          }
          .userBlockComponentActionEventChildrenDiv {
            color: white;
            background: red;
            height: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40rem;
            border-radius: 10px;
          }
        `}</style>
        <div className="userBlockComponentActionEvent">
          <div
            id={RoseId}
            style={edit}
            className="userBlockComponentActionEventChildrenDiv"
          >
            Access Denied: You Are Blocked
          </div>
        </div>
      </>
    );
  }
};