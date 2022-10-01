import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";


import { useOnlineAvatarStyles } from "@mui-treasury/styles/avatar/online";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";

export const OnlineAvatarStyle = React.memo(
  function OnlineAvatar() {
    const gutterStyles = useRowGutterStyles({ size: 16 });
    const styles = useOnlineAvatarStyles({ color: "#f05a99" });
    const styles2 = useOnlineAvatarStyles({
      color: "#1081f8",
      size: 100,
      thickness: 4,
      gap: 4,
    });
    return (
      <Box className={gutterStyles.parent}>
        <div className={styles.root}>
          <Avatar src={"https://i.pravatar.cc/300"} />
        </div>
        <div className={styles2.root}>
          <Avatar src={"https://i.pravatar.cc/300"} />
        </div>
      </Box>
    );
  }
);
