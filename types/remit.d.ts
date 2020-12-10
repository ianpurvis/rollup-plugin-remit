import { Plugin, InputOptions, OutputOptions } from 'rollup'

// Redeclare FilterPattern instead of importing from @rollup/pluginutils
// in order to avoid missing estree error:
export type FilterPattern = ReadonlyArray<string | RegExp> | string | RegExp | null

export interface RollupRemitPluginOptions {
  include?: FilterPattern
  exclude?: FilterPattern
  inputOptions?: InputOptions | ((options: InputOptions) => InputOptions)
  outputOptions?: OutputOptions | ((options: OutputOptions) => OutputOptions)
}

export default function createRemitPlugin(options?: RollupRemitPluginOptions): Plugin
