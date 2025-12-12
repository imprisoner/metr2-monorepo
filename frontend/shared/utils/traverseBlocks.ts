// --- Types (simplified BlockNote-style structures) ---
import type { Block } from "blocknotejs-vue-rte";

export interface TextNode {
  type: "text";
  text: string;
  content?: RichNode[];
}

export interface RichNode {
  type: string;
  text?: string;
  content?: RichNode[];
}

// --- Function ---

/**
 * Extract text content from BlockNote blocks.
 *
 * Traverses the block tree, selects only "paragraph" and "bulletListItem" blocks,
 * collects all text content, and returns a single concatenated string of up
 * to `chars` characters.
 */
export function extractText(blocks: Block[], chars: number = 300): string {
  let result = "";

  function traverse(blockArray: Block[]): void {
    for (const block of blockArray) {
      // Keep only paragraph & bulletListItem
      if (block.type === "paragraph" || block.type === "bulletListItem") {
        if (block.content) {
          const text = extractRichText(block.content);
          result += text + " ";

          // Stop early if length reached
          if (result.length >= chars) return;
        }
      }

      // Recurse into children (nested lists, etc.)
      if (block.children && block.children.length > 0) {
        traverse(block.children);
        if (result.length >= chars) return;
      }
    }
  }

  /**
   * Recursively extract plain text from rich content nodes.
   */
  function extractRichText(nodes: RichNode[]): string {
    let txt = "";
    for (const node of nodes) {
      if (node.type === "text" && node.text) {
        txt += node.text;
      }
      if (node.content) {
        txt += extractRichText(node.content);
      }
    }
    return txt.trim();
  }

  traverse(blocks);

  return result.trim().slice(0, chars);
}

