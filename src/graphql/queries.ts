/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncVideos = /* GraphQL */ `
  query SyncVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
