if [[ -z "${DATABASE_URL}" ]]; then
  export DATABASE_URL="postgresql://${PG_USER}:${APP_DB_ADMIN_PASSWORD}@${PGHOST}:${PGPORT}/${PG_DATABASE}"
fi
export PORT="${PORT:-8080}"

echo $DATABASE_URL
echo $PORT

echo "waiting for DB to accept conenctions: 5" && node -e "(() => {setTimeout(() => {return}, 1000)})()"
echo "waiting for DB to accept conenctions: 4" && node -e "(() => {setTimeout(() => {return}, 1000)})()"
echo "waiting for DB to accept conenctions: 3" && node -e "(() => {setTimeout(() => {return}, 1000)})()"
echo "waiting for DB to accept conenctions: 2" && node -e "(() => {setTimeout(() => {return}, 1000)})()"
echo "waiting for DB to accept conenctions: 1" && node -e "(() => {setTimeout(() => {return}, 1000)})()"

if [ "${IS_LOCAL}" = "true" ]; then echo "reseting db and reseeding" && npx knex migrate:rollback && npx knex migrate:latest && npx knex seed:run ; else echo "in production non local mode, not seeding" ; fi

echo "starting server"
node src/