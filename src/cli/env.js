const parseEnv = () => {
const results = [];
const envVars = process.env;
 for (const [key, value] of Object.entries(envVars)) {
        if (key.startsWith('RSS_')) {
            results.push(`${key}=${value}`);
        }
    }
    
    console.log(results.join('; '));
};

parseEnv();
