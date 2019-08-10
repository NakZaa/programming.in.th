/* React */
import React from 'react'

/* React Util */
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar
} from '@material-ui/core'

import styles from '../assets/css/forum.module.css'

interface props {
  title: string
  date?: string
}

export const ForumList = (props: props) => {
  return (
    <ListItem button className={styles.list}>
      <Avatar>
        <i className="material-icons">timeline</i>
      </Avatar>
      {props.date ? (
        <ListItemText
          className={styles.item}
          primary={props.title}
          secondary={props.date}
        />
      ) : (
        <ListItemText className={styles.item} primary={props.title} />
      )}
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <i className="material-icons">chevron_right</i>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
