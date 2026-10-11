# Requirements

- node
- postgres

# Installation

On a psql shell run:

```
CREATE ROLE retro WITH LOGIN PASSWORD '<your password>';
CREATE DATABASE retro;
ALTER DATABASE retro OWNER TO retro;
```

**On a fresh PostgreSQL installation you may need to modify the `pg_hba.conf` to change the method of authentication from `peer` to `scram-sha-256` if you do not want to create an `screentime` user in your system.**

To populate retro database:

```
npm install
npm run populate
```
