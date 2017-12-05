/**
 * Created by dhazra on 11/26/2017.
 */
import webpack from 'webpack';
import config from '../webpack.config.prod';
import chalk from 'chalk';

/*eslint-disable no-console*/
process.env.NODE_ENV = "production";

console.log(chalk.blue('Generating files for production build...'));

webpack(config).run((err, stats)=>{
    if(err){
        console.log(chalk.red(err));
        return 1
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors){
        return jsonStats.errors.map((error)=>{
            console.log(chalk.red(error));
        })
    }

    if(jsonStats.hasWarnings){
        return jsonStats.warnings.map((warning)=>{
            console.log(chalk.yellow(warning));
        })
    }

    console.log(`Webpack Stats: ${stats}`);

    // If we got this so far then build is succeeded.
    console.log(chalk.green(`Your App has been built for production and ready to deploy...`));

    return 0;
});