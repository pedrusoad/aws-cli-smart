export const awsServices = [
    {
        serviceName: 'S3 Bucket',
        alias: 's3',
        color: '448a27',
        variableName: 'Nome do Bucket',
        variableTag: 'BUCKET',
        commands: [
            {
                name: 'Limpar Bucket',
                description: 'Remove todo conteúdo do S3 Bucket',
                cmd: 'aws s3 rm s3://%BUCKET% --recursive'
            },
            {
                name: 'Sincronizar Bucket',
                description: 'Envia os arquivos da pasta para o S3 Bucket',
                cmd: 'aws s3 sync . s3://%BUCKET%'
            },
        ]
    },
    {
        serviceName: 'CloudFront',
        alias: 'cloudfront',
        color: '7444d0',
        variableName: 'ID do CloudFront',
        variableTag: 'CLOUDFRONT',
        commands: [
            {
                name: 'Criar invalidação',
                description: 'Faz uma requisição de invalidação para uma distribuição do CloudFront',
                cmd: 'aws cloudfront create-invalidation --distribution-id %CLOUDFRONT% --paths "/*"'
            }
        ]
    },
]