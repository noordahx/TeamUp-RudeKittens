IF EXISTS(SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = 'admin') THEN

      RAISE NOTICE 'Role admin already exists';
    ELSE
    BEGIN
        CREATE ROLE admin LOGIN PASSWORD 'admin';
        GRANT ALL PRIVILEGES ON DATABASE db TO admin;
    END;
END IF;

-- IF EXISTS(SELECT * FROM sys.databases WHERE name = 'db') 
-- BEGIN
--     DROP DATABASE db
-- END


IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'db')
BEGIN
    CREATE DATABASE db
    USE db


        
    CREATE TABLE users (
        user_id INT IDENTITY(1,1) PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        username VARCHAR(50) NOT NULL,
        password_hash VARCHAR(100) NOT NULL,
    )

    CREATE TABLE events (
        event_id INT IDENTITY(1,1) PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        location VARCHAR(50) NOT NULL,
        description TEXT NOT NULL,
        date_time DATETIME NOT NULL,
        duration INT NOT NULL,
        skill_level VARCHAR(50) NOT NULL,
        sports VARCHAR(50) NOT NULL,
        creator_id FOREIGN KEY REFERENCES users(user_id) NOT NULL
    )

    CREATE TABLE participation (
        participation_id INT IDENTITY(1,1) PRIMARY KEY,
        user_id FOREIGN KEY REFERENCES users(user_id) NOT NULL,
        event_id FOREIGN KEY REFERENCES events(event_id) NOT NULL   
    )

    CREATE TABLE user_ratings (
        user_rating_id = INT IDENTITY(1,1) PRIMARY KEY,
        rater_id FOREIGN KEY REFERENCES users(user_id) NOT NULL,
        ratee_id FOREIGN KEY REFERENCES users(user_id) NOT NULL,
        rating INT NOT NULL
    )
END