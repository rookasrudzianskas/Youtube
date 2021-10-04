/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      comment
      likes
      dislikes
      replies
      videoID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      User {
        id
        name
        image
        subscribers
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        owner
        Videos {
          nextToken
          startedAt
        }
      }
      Video {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        dislikes
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          image
          subscribers
          sub
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      comment
      likes
      dislikes
      replies
      videoID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      User {
        id
        name
        image
        subscribers
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        owner
        Videos {
          nextToken
          startedAt
        }
      }
      Video {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        dislikes
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          image
          subscribers
          sub
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      comment
      likes
      dislikes
      replies
      videoID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      User {
        id
        name
        image
        subscribers
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        owner
        Videos {
          nextToken
          startedAt
        }
      }
      Video {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        dislikes
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          image
          subscribers
          sub
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      image
      subscribers
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
      Videos {
        items {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          dislikes
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      image
      subscribers
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
      Videos {
        items {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          dislikes
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      image
      subscribers
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
      Videos {
        items {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          dislikes
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
      id
      title
      thumbnail
      videoUrl
      duration
      views
      tags
      likes
      dislikes
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      User {
        id
        name
        image
        subscribers
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        owner
        Videos {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
      id
      title
      thumbnail
      videoUrl
      duration
      views
      tags
      likes
      dislikes
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      User {
        id
        name
        image
        subscribers
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        owner
        Videos {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
      id
      title
      thumbnail
      videoUrl
      duration
      views
      tags
      likes
      dislikes
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      User {
        id
        name
        image
        subscribers
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
        owner
        Videos {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
