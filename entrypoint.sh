if [[ -z "${DATABASE_URL}" ]]; then
  export DATABASE_URL="postgresql://${PG_USER}:${APP_DB_ADMIN_PASSWORD}@${PGHOST}:${PGPORT}/${PG_DATABASE}"
fi
export PORT="${PORT:-8080}"

echo $DATABASE_URL
echo $PORT

#chmod o+rx -R ./node_modules/winston
#echo $(ls -lR)

echo "waiting for DB to accept conenctions: 5" && node -e "(() => {setTimeout(() => {return}, 1000)})()"
echo "waiting for DB to accept conenctions: 4" && node -e "(() => {setTimeout(() => {return}, 1000)})()"
echo "waiting for DB to accept conenctions: 3" && node -e "(() => {setTimeout(() => {return}, 1000)})()"
echo "waiting for DB to accept conenctions: 2" && node -e "(() => {setTimeout(() => {return}, 1000)})()"
echo "waiting for DB to accept conenctions: 1" && node -e "(() => {setTimeout(() => {return}, 1000)})()"

if [ "${IS_LOCAL}" = "true" ]; then echo "reseting db and reseeding local" && npx knex migrate:rollback && npx knex migrate:latest && npx knex seed:run ; echo "reseting db and reseeding production" && npx knex migrate:rollback && npx knex migrate:latest && npx knex seed:run ; fi

#if [ "${IS_LOCAL}" = "true" ]; then echo "reseting db and reseeding local" && npm run buildfreshdocker ; echo "reseting db and reseeding production" && npx knex migrate:rollback && npx knex migrate:latest && npx knex seed:run ; fi

echo "starting server"
node src/